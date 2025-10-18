import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Users, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Navigating the AI Future of Thurston County. Together.
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            The Thurston AI Business Council is a community-led initiative helping local businesses, 
            non-profits, and leaders understand, adapt, and thrive. We are hosting our inaugural 
            in-person summit in January 2026.
          </p>
          <div className="mt-10">
            <Link href="/summit">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold"
                data-testid="button-reserve-seat-hero"
              >
                Reserve Your Seat
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Building a Stronger, Smarter Community
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            As artificial intelligence reshapes the global economy, we believe no local business 
            should be left behind. The Thurston AI Business Council brings together leaders, 
            innovators, and community members to share knowledge, build connections, and ensure 
            our region thrives in the AI era.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Why Join the Council
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="p-6 md:p-8">
                <Brain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Learn & Adapt</h3>
                <p className="text-muted-foreground">
                  Get practical insights on AI tools and strategies tailored for local businesses
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6 md:p-8">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Connect & Collaborate</h3>
                <p className="text-muted-foreground">
                  Network with forward-thinking leaders and innovators in Thurston County
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-6 md:p-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Thrive & Grow</h3>
                <p className="text-muted-foreground">
                  Stay ahead of the curve and position your organization for success
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Join Us for the Inaugural Summit
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tuesday, January 20, 2026 • 9:00 AM - 10:30 AM • Free Registration
          </p>
          <Link href="/summit">
            <Button 
              size="lg" 
              className="px-8"
              data-testid="button-learn-more-cta"
            >
              Learn More & Register
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}