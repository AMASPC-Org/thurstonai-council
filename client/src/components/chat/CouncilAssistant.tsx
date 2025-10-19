import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCouncilAssistant } from "@/hooks/useCouncilAssistant";
import { Send, Loader2, RotateCcw, X } from "lucide-react";

export default function CouncilAssistant() {
  const {
    messages,
    input,
    setInput,
    isLoading,
    sendMessage,
    clearMessages,
    cancelRequest,
  } = useCouncilAssistant();

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Parse message content and replace page mentions with clickable links
  const parseMessageContent = (content: string) => {
    // Check for registration requests and handle them
    const registrationRegex = /\[REGISTRATION_REQUEST:\s*firstName="([^"]+)"\s*lastName="([^"]+)"\s*email="([^"]+)"\s*organization="([^"]+)"\s*title="([^"]+)"\s*sector="([^"]+)"\]/;
    const registrationMatch = content.match(registrationRegex);
    
    if (registrationMatch) {
      // Extract registration data
      const [fullMatch, firstName, lastName, email, organization, title, sector] = registrationMatch;
      
      // Remove registration request from content
      const cleanContent = content.replace(fullMatch, '').trim();
      
      // Make API call to create registration
      fetch('/api/chat/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          organization,
          title,
          sector
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.url) {
          // Auto-redirect to Stripe checkout
          window.location.href = data.url;
        } else if (data.error) {
          // Show error (we can't add to messages here, but the AI will handle it)
          console.error('Registration error:', data.error);
        }
      })
      .catch(err => {
        console.error('Registration error:', err);
      });
      
      // Return the message without the registration command
      return [cleanContent + ' Redirecting you to complete payment...'];
    }
    
    // Check for calendar links
    const calendarLinkRegex = /\[CALENDAR_LINK: ([^\]]+)\]/g;
    let parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = calendarLinkRegex.exec(content)) !== null) {
      // Add text before the calendar link
      if (match.index > lastIndex) {
        parts.push(content.substring(lastIndex, match.index));
      }

      // Parse the calendar link details
      const details = match[1].split(' | ');
      const title = details[0] || "Inaugural Thurston AI Business Summit";
      const date = "2026-01-20";
      const startTime = "09:00";
      const endTime = "10:30";
      const location = details[3] || "Thurston County, WA";
      const eventDetails = "Join the Thurston AI Business Council for the inaugural summit on AI in business.";

      // Generate Google Calendar link
      const startDateTime = new Date(`${date}T${startTime}:00`);
      const endDateTime = new Date(`${date}T${endTime}:00`);
      
      const formatGoogleDate = (d: Date) => {
        return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '').replace('Z', '');
      };
      
      const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: title,
        dates: `${formatGoogleDate(startDateTime)}/${formatGoogleDate(endDateTime)}`,
        location: location,
        details: eventDetails
      });
      
      const calendarUrl = `https://calendar.google.com/calendar/render?${params.toString()}`;

      parts.push(
        <a
          key={`calendar-${match.index}`}
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-md hover:opacity-90 font-medium text-sm"
        >
          📅 Add to Google Calendar
        </a>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add any remaining text
    if (lastIndex < content.length) {
      parts.push(content.substring(lastIndex));
    }

    // If no calendar links were found, process the entire content
    if (parts.length === 0) {
      parts = [content];
    }

    // Now process page links
    const pageLinks = [
      { phrase: "Summit page", route: "/summit" },
      { phrase: "About page", route: "/about" },
      { phrase: "Get Involved page", route: "/get-involved" },
      { phrase: "Sponsorship page", route: "/sponsorship" },
    ];

    // Process each page link
    pageLinks.forEach(({ phrase, route }) => {
      const newParts: (string | JSX.Element)[] = [];
      
      parts.forEach((part) => {
        if (typeof part === "string") {
          const regex = new RegExp(`(${phrase})`, "gi");
          const splits = part.split(regex);
          
          splits.forEach((split, index) => {
            if (split.toLowerCase() === phrase.toLowerCase()) {
              newParts.push(
                <Link key={`${route}-${index}`} href={route}>
                  <a className="underline hover:opacity-80 cursor-pointer font-medium">
                    {split}
                  </a>
                </Link>
              );
            } else if (split) {
              newParts.push(split);
            }
          });
        } else {
          newParts.push(part);
        }
      });
      
      parts = newParts;
    });

    return parts;
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]");
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Card className="w-full h-[600px] flex flex-col" data-testid="council-assistant-container">
      <CardHeader className="flex flex-row items-center justify-between gap-2 pb-3">
        <CardTitle className="text-xl">The Council Assistant</CardTitle>
        <div className="flex gap-2">
          {isLoading && (
            <Button
              size="icon"
              variant="ghost"
              onClick={cancelRequest}
              data-testid="button-cancel"
              title="Cancel"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          <Button
            size="icon"
            variant="ghost"
            onClick={clearMessages}
            disabled={messages.length === 0 || isLoading}
            data-testid="button-clear"
            title="Clear chat"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea ref={scrollAreaRef} className="h-full px-4">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground text-center p-8">
              <div>
                <p className="text-lg font-medium mb-2">Welcome to The Council Assistant!</p>
                <p className="text-sm">
                  I'm here to help you learn about the Thurston AI Business Council, 
                  register for events, and find information on our website.
                </p>
                <p className="text-sm mt-4">
                  How can I assist you today?
                </p>
              </div>
            </div>
          ) : (
            <div className="py-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  data-testid={`message-${message.role}-${message.id}`}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap break-words">
                      {message.content ? (
                        message.role === "assistant" ? (
                          parseMessageContent(message.content)
                        ) : (
                          message.content
                        )
                      ) : (
                        <span className="flex items-center gap-2">
                          <Loader2 className="h-3 w-3 animate-spin" />
                          <span className="italic">Thinking...</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>

      <CardFooter className="p-4">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about the AI Business Council..."
            disabled={isLoading}
            className="flex-1"
            data-testid="input-message"
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            data-testid="button-send"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}