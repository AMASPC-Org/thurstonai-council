import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Trophy, Heart, Users, Megaphone, Star, ArrowLeft } from 'lucide-react';

export default function Sponsorship() {
  const handleContactClick = () => {
    window.location.href = 'mailto:sponsors@thurstonai.com?subject=Inaugural Summit Sponsorship Inquiry';
  };

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-background py-16 md:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/summit">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Summit
            </Button>
          </Link>
          <div className="max-w-3xl">
            <Badge className="mb-4">Limited Opportunities</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Become an Inaugural Summit Sponsor
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Partner with us to launch Thurston County's premier AI business initiative 
              and position your brand as a leader in local innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Why Sponsor the Inaugural Summit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <Trophy className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Founding Recognition</h3>
                <p className="text-muted-foreground">
                  Be recognized as a founding supporter of the Thurston AI Business Council
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Connect with Leaders</h3>
                <p className="text-muted-foreground">
                  Network with 100+ local business leaders and decision makers
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Megaphone className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Brand Visibility</h3>
                <p className="text-muted-foreground">
                  Showcase your commitment to innovation and community development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Sponsorship Opportunities
          </h2>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Title Sponsor */}
            <Card className="border-primary">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Title Sponsor</h3>
                  <Badge variant="secondary" className="text-lg px-4 py-1">
                    $5,000
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  Exclusive naming rights as the presenting sponsor of the inaugural summit
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Event named as "Presented by [Your Company]"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Logo on all marketing materials and website</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>5-minute keynote speaking opportunity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Premium booth space at venue</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>10 complimentary summit tickets for your team/clients</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supporting Sponsor */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Supporting Sponsor</h3>
                  <Badge variant="secondary" className="text-lg px-4 py-1">
                    $2,500
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  Prominent visibility as a key supporter of the AI business community
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Logo featured on event website and signage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Recognition during opening and closing remarks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Booth space at venue</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>5 complimentary summit tickets</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Sponsor */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Community Sponsor</h3>
                  <Badge variant="secondary" className="text-lg px-4 py-1">
                    $1,000
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  Show your support for local AI education and innovation
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Logo on event website</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Recognition in event program</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Social media mentions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>2 complimentary summit tickets</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* In-Kind Sponsor */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">In-Kind Sponsor</h3>
                  <Badge variant="outline" className="text-lg px-4 py-1">
                    Services/Products
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  Provide coffee, breakfast, A/V support, or other event services
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-primary mt-0.5" />
                    <span>Recognition based on contribution value</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-primary mt-0.5" />
                    <span>Logo placement at relevant stations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="w-5 h-5 text-primary mt-0.5" />
                    <span>Social media recognition</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join us in building Thurston County's AI-ready future. 
            Contact our sponsorship team today to secure your opportunity.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={handleContactClick}
            className="px-8"
            data-testid="button-contact-sponsors"
          >
            Contact Sponsorship Team
          </Button>
          <p className="mt-6 text-sm opacity-90">
            or email directly at sponsors@thurstonai.com
          </p>
        </div>
      </section>
    </div>
  );
}