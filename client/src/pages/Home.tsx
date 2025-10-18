import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Users, Target, TrendingUp, Handshake, Compass, FileText, GraduationCap, BookOpen, ArrowRight } from 'lucide-react';
import HeroBackground from '@/components/HeroBackground';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold">
            LIMITED SEATS • JANUARY 2026
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Navigating the AI Future of Thurston County. Together.
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto opacity-95">
            The Thurston AI Business Council, a community-led initiative, invites local leaders to our 
            Inaugural Summit 2026. Join us for a concise, high-impact 90-minute event featuring a dynamic 
            keynote and an expert cross-sector panel, designed to equip you with immediate, actionable AI 
            insights for your business. Secure your place now for just $25. Scholarships are available upon request.
          </p>
          <div className="mt-10 space-y-4">
            <Link href="/summit">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                data-testid="button-reserve-seat-hero"
              >
                Reserve Your Free Seat Now
              </Button>
            </Link>
            <p className="text-sm opacity-90">
              90-minute summit • Practical insights • Local networking
            </p>
          </div>
        </div>
      </section>

      {/* Why Join the Council Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Why Join the Council?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Become part of Thurston County's premier AI business community and unlock immediate 
            benefits that will transform your organization's future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gain a Competitive Edge</h3>
                <p className="text-muted-foreground mb-4">
                  Access cutting-edge AI insights and strategies before your competition. Learn which 
                  tools deliver real ROI and which are just hype.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Exclusive AI tool evaluations
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Implementation roadmaps
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Cost-benefit analyses
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Connect & Collaborate</h3>
                <p className="text-muted-foreground mb-4">
                  Network with local leaders and innovators who are successfully implementing AI. 
                  Build partnerships that drive mutual growth.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Monthly networking events
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Peer learning groups
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Partnership opportunities
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <Compass className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Shape the Future</h3>
                <p className="text-muted-foreground mb-4">
                  Influence the direction of AI adoption in Thurston County. Your voice matters in 
                  building an inclusive, thriving AI ecosystem.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Advisory board opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Policy input sessions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Community leadership roles
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insights & Resources Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
            Stay Ahead with Data-Driven Insights
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Your AI Knowledge Hub—curated resources from leading experts and local innovators 
            to keep you informed and inspired.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Academic Papers</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Data-driven research from leading institutions and AI researchers
                </p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <Badge variant="outline" className="mb-1">Coming Soon</Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      Research from Wharton, MIT, and Stanford
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Articles</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Thought leadership from AI pioneers and industry experts
                </p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <Badge variant="outline" className="mb-1">Featured</Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      Insights from Ethan Mollick and other thought leaders
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Local Case Studies</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Real-world AI applications from Thurston County businesses
                </p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <Badge variant="outline" className="mb-1">Launching Q1 2026</Badge>
                    <p className="text-xs text-muted-foreground mt-2">
                      Success stories from your neighbors
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Full resource library launching after the inaugural summit • Subscribe for updates
            </p>
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
            Tuesday, January 20, 2026 • 9:00 AM - 10:30 AM • This 90-minute, high-impact event is a critical 
            step for businesses looking to thrive in the AI era. Secure your attendance for just $25. Scholarships available.
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