import { Card } from "@/components/ui/card";

export default function CouncilAssistant() {
  return (
    <Card className="w-full h-full p-4">
      <div data-testid="council-assistant-container">
        {/* Council Assistant UI will go here */}
        <h2 className="text-2xl font-bold">The Council Assistant</h2>
      </div>
    </Card>
  );
}