import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { z } from "zod";
import chatRouter from "./routes/chat";
import Stripe from "stripe";

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-09-30.clover",
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Use chat router for Council Assistant
  app.use(chatRouter);
  
  // Stripe checkout session for summit tickets
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { registrationId } = req.body;
      
      if (!registrationId) {
        return res.status(400).json({ error: "Registration ID required" });
      }
      
      const registration = await storage.getRegistrationById(registrationId);
      if (!registration) {
        return res.status(404).json({ error: "Registration not found" });
      }
      
      // Create Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [{
          price_data: {
            currency: "usd",
            product_data: {
              name: "Thurston AI Business Summit 2026 Ticket",
              description: "January 20, 2026 - 9:00 AM to 10:30 AM",
            },
            unit_amount: 2500, // $25.00 in cents
          },
          quantity: 1,
        }],
        mode: "payment",
        success_url: `${req.headers.origin || "http://localhost:5000"}/summit?payment=success&registration=${registrationId}`,
        cancel_url: `${req.headers.origin || "http://localhost:5000"}/summit?payment=cancelled`,
        customer_email: registration.email,
        metadata: {
          registrationId: registration.id,
        },
      });
      
      // Update registration with session ID
      await storage.updateRegistrationPayment(registration.id, {
        paymentStatus: "pending",
        stripeSessionId: session.id,
      });
      
      res.json({ sessionId: session.id, url: session.url });
    } catch (error) {
      console.error("Stripe session creation error:", error);
      res.status(500).json({ 
        error: "Failed to create payment session", 
        details: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });
  
  // Stripe webhook to confirm payment
  app.post("/api/stripe-webhook", async (req, res) => {
    const sig = req.headers["stripe-signature"] as string;
    
    try {
      // For development, we'll handle the webhook without signature verification
      // In production, you should verify the signature
      const event = req.body;
      
      if (event.type === "checkout.session.completed") {
        const session = event.data.object as any;
        const registrationId = session.metadata?.registrationId;
        
        if (registrationId) {
          await storage.updateRegistrationPayment(registrationId, {
            paymentStatus: "paid",
            stripePaymentIntentId: session.payment_intent,
            paidAt: new Date(),
          });
        }
      }
      
      res.json({ received: true });
    } catch (error) {
      console.error("Webhook error:", error);
      res.status(400).send(`Webhook Error: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  });
  
  // Registration endpoint
  app.post("/api/register", async (req, res) => {
    try {
      // Extract scholarship request flag
      const { requestScholarship, ...registrationData } = req.body;
      
      // Set payment status based on scholarship request
      const paymentStatus = requestScholarship ? "scholarship" : "pending";
      
      // Validate registration data with payment status
      const validatedData = insertRegistrationSchema.parse({
        ...registrationData,
        paymentStatus
      });
      
      // Check if email already registered
      const existingRegistration = await storage.getRegistrationByEmail(validatedData.email);
      if (existingRegistration) {
        return res.status(400).json({ 
          error: "This email is already registered for the summit." 
        });
      }
      
      // Create registration
      const registration = await storage.createRegistration(validatedData);
      
      // Different response based on payment type
      if (requestScholarship) {
        res.status(201).json({ 
          success: true, 
          message: "Scholarship request received! We'll contact you via email with confirmation.",
          registration: {
            id: registration.id,
            firstName: registration.firstName,
            lastName: registration.lastName,
            organization: registration.organization,
            paymentStatus: "scholarship"
          }
        });
      } else {
        // Return registration with payment needed flag
        res.status(201).json({ 
          success: true, 
          needsPayment: true,
          message: "Registration started! Please complete payment to secure your seat.",
          registration: {
            id: registration.id,
            firstName: registration.firstName,
            lastName: registration.lastName,
            organization: registration.organization,
            paymentStatus: "pending"
          }
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Invalid registration data", 
          details: error.errors 
        });
      }
      
      console.error("Registration error:", error);
      res.status(500).json({ 
        error: "An error occurred during registration. Please try again." 
      });
    }
  });
  
  // Get registration stats (for admin view later)
  app.get("/api/registrations/stats", async (req, res) => {
    try {
      const count = await storage.getRegistrationCount();
      res.json({ 
        totalRegistrations: count,
        seatsRemaining: Math.max(0, 100 - count) // Assuming 100 seat capacity
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ error: "Failed to fetch registration stats" });
    }
  });
  
  // Get all registrations (for admin view later)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getAllRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      res.status(500).json({ error: "Failed to fetch registrations" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
