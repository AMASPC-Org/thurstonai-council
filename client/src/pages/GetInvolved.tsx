import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MessageSquare, BookOpen, Lightbulb, Mail, Calendar } from 'lucide-react';

export default function GetInvolved() {
  const handleNewsletterClick = () => {
    window.location.href = 'mailto:info@thurstonai.com?subject=Newsletter Subscription Request';
  };

  const handleVolunteerClick = () => {
    window.location.href = 'mailto:volunteer@thurstonai.com?subject=Volunteer Interest - Thurston AI Business Council';
  };

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-background py-16 md:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Join the AI Movement
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Multiple ways to engage with the Thurston AI Business Council and help shape 
              our region's technological future
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Ways to Get Involved
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Attend Events */}
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Attend Our Events</h3>
                <p className="text-muted-foreground mb-6">
                  Join us at the inaugural summit and future gatherings to learn, network, 
                  and grow your AI knowledge.
                </p>
                <Link href="/summit">
                  <Button variant="outline" className="w-full">
                    View Upcoming Events
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Join the Conversation */}
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6">
                  <MessageSquare className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Join the Conversation</h3>
                <p className="text-muted-foreground mb-6">
                  Participate in our online community forums to share experiences and learn 
                  from fellow members.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Community Launching Soon
                </Button>
              </CardContent>
            </Card>

            {/* Contribute Knowledge */}
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Contribute Knowledge</h3>
                <p className="text-muted-foreground mb-6">
                  Share your AI implementation stories, write articles, or contribute to our 
                  resource library.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Resource Hub Coming Soon
                </Button>
              </CardContent>
            </Card>

            {/* Become a Member */}
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Become a Member</h3>
                <p className="text-muted-foreground mb-6">
                  Get exclusive access to resources, events, and networking opportunities 
                  as a Council member.
                </p>
                <Link href="/membership-application">
                  <Button variant="outline" className="w-full">
                    Apply for Membership
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Volunteer */}
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
                <p className="text-muted-foreground mb-6">
                  Help organize events, create content, or support our mission through 
                  volunteer opportunities.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleVolunteerClick}
                  data-testid="button-volunteer"
                >
                  Express Interest
                </Button>
              </CardContent>
            </Card>

            {/* Stay Updated */}
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter for AI insights, event updates, and community news.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleNewsletterClick}
                  data-testid="button-newsletter"
                >
                  Subscribe to Newsletter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Summit CTA */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Don't Miss the Inaugural Summit
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The best way to get involved is to attend our inaugural summit on January 20, 2026. 
            Connect with the community, learn from experts, and start your AI journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/summit">
              <Button size="lg" className="px-8">
                Register for Summit
              </Button>
            </Link>
            <Link href="/sponsorship">
              <Button size="lg" variant="outline" className="px-8">
                Become a Sponsor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Partnership Opportunities
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We welcome partnerships with organizations committed to advancing AI education and 
            adoption in Thurston County. Whether you're an educational institution, technology 
            company, or community organization, let's work together.
          </p>
          <Link href="/partnership">
            <Button 
              size="lg"
              data-testid="button-partnerships"
            >
              Explore Partnership Options
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}