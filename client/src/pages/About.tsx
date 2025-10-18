import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Shield, Handshake } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-background py-16 md:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Our Mission: Demystifying AI for Our Community
            </h1>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold">Why We Started</h2>
              <div className="space-y-4 text-lg leading-relaxed text-foreground">
                <p>
                  Artificial Intelligence represents the most significant technological shift of our 
                  lifetime. While major corporations race to implement AI solutions, local businesses 
                  and non-profits in Thurston County face unique challenges in understanding and 
                  adopting these transformative tools.
                </p>
                <p>
                  The rapid pace of AI development has created a knowledge gap that threatens to leave 
                  our local economy behind. Small businesses wonder how to compete, non-profits struggle 
                  to leverage AI for their missions, and community leaders seek guidance on preparing 
                  our workforce for an AI-driven future.
                </p>
                <p>
                  The Thurston AI Business Council was formed to bridge this gap. We serve as a clear, 
                  local, and trusted resource—a place where business owners can ask questions without 
                  judgment, share strategies that work, and learn together. Our mission is simple: 
                  ensure that every organization in Thurston County has the knowledge and connections 
                  needed to thrive in the AI era.
                </p>
              </div>
            </div>
            
            {/* Pull Quote */}
            <div className="lg:sticky lg:top-24">
              <Card className="bg-accent border-primary/20">
                <CardContent className="p-8">
                  <blockquote className="text-xl md:text-2xl font-medium italic text-primary">
                    "AI is the biggest technological shift of our lifetime. Local businesses and 
                    non-profits are at risk of being left behind."
                  </blockquote>
                  <div className="mt-4 text-sm text-muted-foreground">
                    — Thurston AI Business Council
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Partner */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">Founding Partner</h2>
            <div className="bg-background rounded-lg p-8 md:p-12">
              <div className="mb-6">
                <div className="inline-block px-6 py-3 bg-primary/10 rounded-lg">
                  <span className="text-2xl font-bold text-primary">AMA SPC</span>
                </div>
              </div>
              <p className="text-lg">
                The Thurston AI Business Council is an initiative powered by the American Marketing 
                Alliance SPC, a social purpose corporation dedicated to advancing business education 
                and community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Our Vision & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovation for All</h3>
                <p className="text-muted-foreground">
                  We believe every business, regardless of size or resources, deserves access to 
                  AI knowledge and tools that can transform their operations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 md:p-8">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Trusted Guidance</h3>
                <p className="text-muted-foreground">
                  We provide clear, unbiased information about AI technologies, helping businesses 
                  make informed decisions without the hype or fear.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 md:p-8">
                <Handshake className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  We strengthen our local economy by fostering collaboration, sharing successes, 
                  and ensuring no one gets left behind in the AI revolution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}