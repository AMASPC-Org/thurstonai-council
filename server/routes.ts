import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";
import { z } from "zod";
import chatRouter from "./routes/chat";

export async function registerRoutes(app: Express): Promise<Server> {
  // Use chat router for Council Assistant
  app.use(chatRouter);
  
  // Registration endpoint
  app.post("/api/register", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertRegistrationSchema.parse(req.body);
      
      // Check if email already registered
      const existingRegistration = await storage.getRegistrationByEmail(validatedData.email);
      if (existingRegistration) {
        return res.status(400).json({ 
          error: "This email is already registered for the summit." 
        });
      }
      
      // Create registration
      const registration = await storage.createRegistration(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Registration successful! Check your email for confirmation.",
        registration: {
          id: registration.id,
          firstName: registration.firstName,
          lastName: registration.lastName,
          organization: registration.organization
        }
      });
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
