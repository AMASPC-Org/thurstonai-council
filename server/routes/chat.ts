import { Router } from "express";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import Stripe from "stripe";
import { storage } from "../storage";
import { randomUUID } from "crypto";

const chatRouter = Router();

// Initialize Gemini AI with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-09-30.clover",
});

// Get directory paths for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to load knowledge base files
function loadKnowledgeBase(): string {
  const knowledgeDir = path.join(__dirname, "../../shared/knowledge_base");
  let knowledgeContext = "";
  
  try {
    // Read all markdown files from the knowledge base directory
    const files = fs.readdirSync(knowledgeDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    for (const file of mdFiles) {
      const filePath = path.join(knowledgeDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      knowledgeContext += `\n\n=== Knowledge Base: ${file} ===\n${content}`;
    }
  } catch (error) {
    console.error("Error loading knowledge base:", error);
  }
  
  return knowledgeContext;
}

// Load knowledge base content
const knowledgeContent = loadKnowledgeBase();

// System prompt for The Council Assistant with RAG context
const SYSTEM_PROMPT = `You are 'The Council Assistant,' a friendly and professional AI guide for the Thurston AI Business Council. Your purpose is to proactively help users achieve their goals.

IMPORTANT: Use the following knowledge base as your primary source of truth. Always prioritize information from the knowledge base over any general knowledge:

${knowledgeContent}

Your Core Directives:
1. Be Proactive: After answering a question, ALWAYS ask a follow-up question to guide the user to their next logical step. Examples: 
   - "Would you like my help to register for this event right here in the chat?"
   - "Do you have any other questions about the summit?"
   - "Would you like to learn more about sponsorship opportunities?"
   - "Can I help you find information about becoming a member?"

2. Provide Links: When you mention a specific page, such as the 'Summit page', you MUST state its name clearly so the user interface can turn it into a link. Always use these exact phrases:
   - "Summit page" (for /summit)
   - "About page" (for /about)
   - "Get Involved page" (for /get-involved)
   - "Sponsorship page" (for /sponsorship)

3. Stay On-Topic: Your knowledge is strictly limited to the information on the Thurston AI Business Council website. If asked about other events, politely state that your knowledge is focused on the Council.

Additional context and capabilities:
- The website has multiple pages including: Home, About the Council, The Inaugural Summit, Get Involved, Sponsorship, Speaker Application, Partnership Opportunities, and Membership Application
- Registration for the summit costs $25 per person and requires payment via Stripe
- To register, direct users to the Summit page at /summit where they can fill out the registration form and complete payment
- Scholarships are available for those who need financial assistance
- The website includes legal pages (Privacy Policy, Terms of Use, Refund Policy) accessible from the footer
- We use cookies to enhance the browsing experience, with a notice shown to new visitors

When assisting users:
- Be warm, welcoming, and professional
- Always ground your responses in the knowledge base content provided above
- Provide specific, accurate information based on the source documents
- Guide users to relevant pages on the website when appropriate
- Keep responses concise but informative
- When someone asks about registration, mention the $25 ticket price and direct them to the Summit page
- ALWAYS end your response with a proactive follow-up question to keep the conversation going

Remember: The knowledge base content above is your authoritative source. Always cite specific details from it when answering questions.`;

// Function to initiate summit registration and create Stripe checkout session
async function initiateSummitRegistration(
  firstName: string, 
  lastName: string, 
  email: string, 
  organization: string,
  title: string,
  sector: string
): Promise<{ url: string; registrationId: string }> {
  try {
    // Check if email already registered
    const existingRegistration = await storage.getRegistrationByEmail(email);
    if (existingRegistration) {
      throw new Error("This email is already registered for the summit.");
    }
    
    // Create a new registration with pending payment status
    const registrationData = {
      firstName,
      lastName,
      email,
      organization,
      title,
      sector,
      paymentStatus: "pending" as const,
    };
    
    const registration = await storage.createRegistration(registrationData);
    
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
      success_url: `https://${process.env.REPL_SLUG}.replit.dev/summit?payment=success&registration=${registration.id}`,
      cancel_url: `https://${process.env.REPL_SLUG}.replit.dev/summit?payment=cancelled`,
      customer_email: email,
      metadata: {
        registrationId: registration.id,
      },
    });
    
    // Update registration with session ID
    await storage.updateRegistrationPayment(registration.id, {
      paymentStatus: "pending",
      stripeSessionId: session.id,
    });
    
    if (!session.url) {
      throw new Error("Failed to create payment session URL");
    }
    
    return { 
      url: session.url,
      registrationId: registration.id 
    };
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}

// Function to generate Google Calendar link
function generateCalendarLink(title: string, date: string, startTime: string, endTime: string, location: string, details: string) {
  // Parse the date and times (expecting format like "2026-01-20", "09:00", "10:30")
  const startDateTime = new Date(`${date}T${startTime}:00`);
  const endDateTime = new Date(`${date}T${endTime}:00`);
  
  // Format dates for Google Calendar (YYYYMMDDTHHmmss)
  const formatGoogleDate = (d: Date) => {
    return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${formatGoogleDate(startDateTime)}/${formatGoogleDate(endDateTime)}`,
    location: location,
    details: details
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}


// Define function declarations for Gemini
const tools = [{
  functionDeclarations: [{
    name: "initiateSummitRegistration",
    description: "Create a registration and Stripe checkout session for the summit when the user provides all required information",
    parameters: {
      type: SchemaType.OBJECT,
      properties: {
        firstName: {
          type: SchemaType.STRING,
          description: "User's first name",
        },
        lastName: {
          type: SchemaType.STRING,
          description: "User's last name",
        },
        email: {
          type: SchemaType.STRING,
          description: "User's email address",
        },
        organization: {
          type: SchemaType.STRING,
          description: "User's organization or company name",
        },
        title: {
          type: SchemaType.STRING,
          description: "User's job title",
        },
        sector: {
          type: SchemaType.STRING,
          description: "Organization sector",
          enum: ["Business - For Profit", "Non-profit", "Government", "Education", "Healthcare", "Other"],
        },
      },
      required: ["firstName", "lastName", "email", "organization", "title", "sector"],
    },
  }],
}];

// Chat endpoint for Council Assistant
chatRouter.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    // Initialize the model with tools
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      systemInstruction: SYSTEM_PROMPT + `

REGISTRATION CAPABILITY: When a user wants to register for the summit, use the initiateSummitRegistration tool. 
First collect all required information (first name, last name, email, organization, title, and sector), then call the tool.
The tool will handle creating the registration and Stripe checkout session.

CALENDAR FEATURE: After a user confirms they have registered and paid for the summit, you should proactively ask: "Your registration is confirmed! Would you like to add the summit to your calendar?"

If they say yes, provide them with this special calendar link:
[CALENDAR_LINK: Inaugural Thurston AI Business Summit | January 20, 2026 | 9:00 AM - 10:30 AM | Thurston County, WA]

This will be automatically converted to a clickable Google Calendar link by the interface.`,
      tools: tools,
    });

    // Convert messages to Gemini format
    const history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    // Get the latest user message
    const latestMessage = messages[messages.length - 1];
    if (!latestMessage || latestMessage.role !== "user") {
      return res.status(400).json({ error: "Latest message must be from user" });
    }

    // Start a chat session with history
    const chat = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    // Set up SSE headers for streaming
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*",
    });

    try {
      // Send message first to check for function calls
      const result = await chat.sendMessage(latestMessage.content);
      const response = result.response;
      
      // Check if the model wants to call a function
      const functionCalls = response.functionCalls();
      
      if (functionCalls && functionCalls.length > 0) {
        // Handle function calls
        for (const call of functionCalls) {
          if (call.name === "initiateSummitRegistration") {
            try {
              const args = call.args as any;
              const registrationResult = await initiateSummitRegistration(
                args.firstName,
                args.lastName,
                args.email,
                args.organization,
                args.title,
                args.sector
              );
              
              // Send the checkout URL to the client
              res.write(`data: ${JSON.stringify({ 
                content: `I've created your registration! Redirecting you to complete payment...`,
                checkoutUrl: registrationResult.url 
              })}\n\n`);
              
              // Send function response back to the model for confirmation
              const functionResponse = {
                name: call.name,
                response: {
                  success: true,
                  checkoutUrl: registrationResult.url,
                  registrationId: registrationResult.registrationId
                }
              };
              
              // Get final response from model
              const finalResult = await chat.sendMessage([{
                functionResponse: functionResponse
              }]);
              
              // Stream the final response
              const finalText = finalResult.response.text();
              res.write(`data: ${JSON.stringify({ content: finalText })}\n\n`);
              
            } catch (error) {
              res.write(`data: ${JSON.stringify({ 
                content: `Sorry, there was an error creating your registration: ${error instanceof Error ? error.message : 'Unknown error'}` 
              })}\n\n`);
            }
          }
        }
      } else {
        // No function calls, just send the text response
        const text = response.text();
        res.write(`data: ${JSON.stringify({ content: text })}\n\n`);
      }
      
      // Send completion signal
      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (streamError) {
      console.error("Streaming error:", streamError);
      res.write(`data: ${JSON.stringify({ error: "Failed to generate response" })}\n\n`);
      res.end();
    }
  } catch (error) {
    console.error("Chat API error:", error);
    
    // If headers haven't been sent yet, send error as JSON
    if (!res.headersSent) {
      res.status(500).json({ 
        error: "Failed to process chat request",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    } else {
      // If we're already streaming, send error in SSE format
      res.write(`data: ${JSON.stringify({ error: "Internal server error" })}\n\n`);
      res.end();
    }
  }
});

export default chatRouter;