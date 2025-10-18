import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Handshake, Building, Lightbulb, BookOpen, Users, 
  Trophy, Target, ArrowRight, CheckCircle, Loader2 
} from 'lucide-react';

export default function PartnershipOpportunities() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect to backend API when ready
    setTimeout(() => {
      console.log('Partnership inquiry submitted:', formData);
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your interest in partnering. We'll contact you within 2 business days.",
      });
      setFormData({
        organizationName: '',
        contactName: '',
        email: '',
        phone: '',
        partnershipType: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-background py-16 md:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4">Build Together</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Partnership Opportunities
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Join forces with the Thurston AI Business Council to advance AI education, 
              adoption, and innovation across our region. Together, we can build a thriving 
              AI-ready community.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Strategic Alignment</h3>
                <p className="text-muted-foreground text-sm">
                  Align your organization with the region's leading AI initiative and demonstrate 
                  commitment to local economic development
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Community Access</h3>
                <p className="text-muted-foreground text-sm">
                  Connect directly with business leaders, educators, government officials, and 
                  healthcare professionals across Thurston County
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Trophy className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Thought Leadership</h3>
                <p className="text-muted-foreground text-sm">
                  Position your organization as a forward-thinking leader in AI adoption and 
                  digital transformation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Partnerships */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Partnership Opportunities
          </h2>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Event Sponsorship */}
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-3">Event Sponsorship</h3>
                    <p className="text-muted-foreground mb-4">
                      Support our events including the Inaugural Summit and future gatherings. 
                      Multiple sponsorship tiers available from $1,000 to $5,000, with benefits 
                      including brand visibility, speaking opportunities, and premium networking access.
                    </p>
                    <Link href="/sponsorship">
                      <Button variant="outline" className="group">
                        View Sponsorship Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content & Research Collaboration */}
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-3">Content & Research Collaboration</h3>
                    <p className="text-muted-foreground mb-4">
                      Partner with us to create valuable content for our community. Opportunities include:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Co-authoring white papers and research studies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Contributing to our resource library and blog</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Sharing case studies and best practices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Joint surveys and market research initiatives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Program Partnerships */}
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-3">Program & Initiative Partnerships</h3>
                    <p className="text-muted-foreground mb-4">
                      Collaborate on educational programs and community initiatives:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">AI literacy workshops and training programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Student internship and mentorship programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Sector-specific AI implementation pilots</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Community hackathons and innovation challenges</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategic Alliance */}
            <Card className="border-primary">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Handshake className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-3">Strategic Alliance</h3>
                    <Badge className="mb-3">Exclusive Opportunities</Badge>
                    <p className="text-muted-foreground mb-4">
                      For organizations ready to make a significant commitment to our mission, we offer 
                      strategic alliance partnerships with exclusive benefits:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Advisory board representation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Co-branded initiatives and programs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Priority access to Council resources and data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="text-muted-foreground">Custom partnership terms aligned with your goals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technology Partners */}
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-3">Technology Partners</h3>
                    <p className="text-muted-foreground mb-4">
                      AI companies and technology providers can partner to showcase solutions and 
                      provide resources to our community. Benefits include demo opportunities, 
                      educational content collaboration, and direct access to potential customers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold">Start the Conversation</h2>
              <p className="text-muted-foreground mt-2">
                Tell us about your organization and partnership interests
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Organization Info */}
                <div className="space-y-2">
                  <Label htmlFor="organizationName">Organization Name *</Label>
                  <Input
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                    data-testid="input-org-name"
                  />
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    data-testid="input-phone"
                  />
                </div>

                {/* Partnership Type */}
                <div className="space-y-2">
                  <Label htmlFor="partnershipType">Partnership Interest *</Label>
                  <Input
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    placeholder="e.g., Event Sponsorship, Content Collaboration, Strategic Alliance"
                    required
                    data-testid="input-partnership-type"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us More *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share your vision for partnership and how we can work together"
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit-partnership"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting Inquiry...
                    </>
                  ) : (
                    'Submit Partnership Inquiry'
                  )}
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Or contact us directly at</p>
                <a href="mailto:partnerships@thurstonai.com" className="text-primary hover:underline">
                  partnerships@thurstonai.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}