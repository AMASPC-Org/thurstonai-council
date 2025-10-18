import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Mic, CheckCircle, Users, Calendar, ArrowLeft, Loader2 } from 'lucide-react';

export default function SpeakerApplication() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    title: '',
    expertise: '',
    topicProposal: '',
    bio: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect to backend API when ready
    // For now, simulate submission
    setTimeout(() => {
      console.log('Speaker application submitted:', formData);
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in speaking. We'll review your application and contact you soon.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        title: '',
        expertise: '',
        topicProposal: '',
        bio: ''
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
          <Link href="/summit">
            <Button variant="ghost" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Summit
            </Button>
          </Link>
          <div className="max-w-3xl">
            <Badge className="mb-4">Call for Speakers</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Share Your AI Success Story
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Join our expert panel and help local businesses navigate their AI journey. 
              We're seeking practitioners with real-world implementation experience.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            What We're Looking For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Business Leaders</h3>
                <p className="text-muted-foreground text-sm">
                  CEOs, executives, and managers who have successfully implemented AI in their organizations
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Mic className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Technical Experts</h3>
                <p className="text-muted-foreground text-sm">
                  Engineers and consultants who can explain AI concepts in accessible terms
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Local Innovators</h3>
                <p className="text-muted-foreground text-sm">
                  Thurston County professionals making an impact with AI solutions
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">Ideal Topics Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>AI implementation case studies</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Cost-benefit analysis of AI tools</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Workforce preparation strategies</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Overcoming adoption challenges</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Industry-specific AI applications</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <span>Ethical AI considerations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <h2 className="text-2xl md:text-3xl font-semibold">Speaker Application Form</h2>
              <p className="text-muted-foreground mt-2">
                Tell us about your experience and proposed topic
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      data-testid="input-speaker-first-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      data-testid="input-speaker-last-name"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="input-speaker-email"
                  />
                </div>

                {/* Professional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      data-testid="input-speaker-organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title *</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      data-testid="input-speaker-title"
                    />
                  </div>
                </div>

                {/* Expertise */}
                <div className="space-y-2">
                  <Label htmlFor="expertise">Area of AI Expertise *</Label>
                  <Input
                    id="expertise"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    placeholder="e.g., Machine Learning, Process Automation, Natural Language Processing"
                    required
                    data-testid="input-speaker-expertise"
                  />
                </div>

                {/* Topic Proposal */}
                <div className="space-y-2">
                  <Label htmlFor="topicProposal">Proposed Topic/Presentation *</Label>
                  <Textarea
                    id="topicProposal"
                    name="topicProposal"
                    value={formData.topicProposal}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your proposed topic and key takeaways for the audience"
                    required
                    data-testid="textarea-speaker-topic"
                  />
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label htmlFor="bio">Brief Bio *</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your background and experience with AI (150-200 words)"
                    required
                    data-testid="textarea-speaker-bio"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit-speaker-application"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Speaker Application'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}