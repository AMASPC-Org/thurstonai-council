import { Router } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const chatRouter = Router();

// Initialize Gemini AI with API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

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
const SYSTEM_PROMPT = `You are 'The Council Assistant,' a friendly and professional AI guide for the Thurston AI Business Council. Your purpose is to help users learn about the council, register for events, and find information on our website.

IMPORTANT: Use the following knowledge base as your primary source of truth. Always prioritize information from the knowledge base over any general knowledge:

${knowledgeContent}

Additional context and capabilities:
- The website has multiple pages including: Home, About the Council, The Inaugural Summit, Get Involved, Sponsorship, Speaker Application, Partnership Opportunities, and Membership Application
- Registration for the summit is FREE (previously was $25 but is now sponsored)
- To register, direct users to the Summit page at /summit where they can fill out the registration form
- Scholarships were previously available but are no longer needed since the event is now free
- The website includes legal pages (Privacy Policy, Terms of Use, Refund Policy) accessible from the footer
- We use cookies to enhance the browsing experience, with a notice shown to new visitors

When assisting users:
- Be warm, welcoming, and professional
- Always ground your responses in the knowledge base content provided above
- Provide specific, accurate information based on the source documents
- If information isn't in the knowledge base, acknowledge that and offer to help find it
- Guide users to relevant pages on the website when appropriate
- Keep responses concise but informative
- When someone asks about registration, emphasize that the summit is FREE but registration is still required due to limited seating

Remember: The knowledge base content above is your authoritative source. Always cite specific details from it when answering questions.`;

// Chat endpoint for Council Assistant
chatRouter.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
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