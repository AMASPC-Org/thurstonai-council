import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Lightbulb, Shield, Handshake, CheckCircle } from 'lucide-react';

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

      {/* How to Join the Council */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            How to Join the Thurston AI Business Council
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join a growing community of forward-thinking leaders committed to navigating the AI 
            transformation together. Membership is open to all Thurston County businesses, 
            non-profits, educational institutions, and civic leaders.
          </p>
          
          <div className="max-w-3xl mx-auto mb-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Member Benefits</h3>
                <ul className="text-left space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Exclusive access to AI workshops and training sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priority invitations to Council events and summits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Access to our member-only resource library and tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Networking opportunities with regional AI leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Voting rights on Council initiatives and priorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Opportunities to shape regional AI policy and best practices</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm font-medium">Membership Fees</p>
                  <p className="text-lg font-semibold text-primary mt-1">Free for Charter Members</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Join now as a founding member with no annual fee through 2026. 
                    Standard membership ($250/year) begins in 2027.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Link href="/membership-application">
            <Button size="lg" className="px-8" data-testid="button-join-council">
              Apply for Membership
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}