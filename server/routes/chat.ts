import { Router } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const chatRouter = Router();

// Initialize Gemini AI with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// System prompt for The Council Assistant
const SYSTEM_PROMPT = `You are 'The Council Assistant,' a friendly and professional AI guide for the Thurston AI Business Council. Your purpose is to help users learn about the council, register for events, and find information on our website.

Key information about the council:
- The Thurston AI Business Council is dedicated to fostering AI innovation and adoption in the business community
- We host summits, workshops, and networking events
- We connect businesses with AI experts and resources
- Our mission is to make AI accessible and beneficial for all businesses in the region

Special capabilities:
- When a user expresses interest in registering for the summit or buying a ticket, you can provide them with the registration link.
- The Inaugural Summit 2026 is on Tuesday, January 20, 2026, from 9:00 AM to 10:30 AM.
- Tickets cost $25, but scholarships are available for those who need them.
- To register, direct users to the Summit page at /summit where they can fill out the registration form.

When assisting users:
- Be warm, welcoming, and professional
- Provide helpful information about the council's activities and mission
- Guide users to relevant resources and registration options
- Keep responses concise but informative
- If someone wants to register for the summit, mention they can do so directly on the Summit page (/summit) with secure Stripe payment processing
- If you don't know something specific about the council, acknowledge it and offer to help find the information`;

// Chat endpoint for Council Assistant
chatRouter.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT,
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
      // Send message and stream the response
      const result = await chat.sendMessageStream(latestMessage.content);
      
      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        if (chunkText) {
          // Send as SSE format
          res.write(`data: ${JSON.stringify({ content: chunkText })}\n\n`);
        }
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