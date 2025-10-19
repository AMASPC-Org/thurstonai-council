import { useEffect, useRef } from "react";
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
                    <p className="text-sm whitespace-pre-wrap break-words">
                      {message.content || (
                        <span className="flex items-center gap-2">
                          <Loader2 className="h-3 w-3 animate-spin" />
                          <span className="italic">Thinking...</span>
                        </span>
                      )}
                    </p>
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