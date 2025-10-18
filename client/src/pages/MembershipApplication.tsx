import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Building2, UserCheck } from 'lucide-react';

export default function MembershipApplication() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    title: '',
    organizationType: '',
    website: '',
    employees: '',
    aiInterest: '',
    membershipGoals: '',
    referralSource: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect to backend API when ready
    setTimeout(() => {
      console.log('Membership application submitted:', formData);
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying for membership. We'll review your application and contact you within 2-3 business days.",
      });
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        title: '',
        organizationType: '',
        website: '',
        employees: '',
        aiInterest: '',
        membershipGoals: '',
        referralSource: ''
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-background py-16 md:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Join the Thurston AI Business Council
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Become a charter member and help shape the future of AI adoption in our region
            </p>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <UserCheck className="w-10 h-10 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">Charter Member Application</h2>
              <p className="text-muted-foreground mt-2">
                Join as a founding member with no annual fee through 2026
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span>Personal Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        data-testid="input-first-name"
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
                        data-testid="input-last-name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>
                </div>

                {/* Organization Information */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    <span>Organization Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization Name *</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                        data-testid="input-organization"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Your Title/Role *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        data-testid="input-title"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organizationType">Organization Type *</Label>
                      <Select 
                        value={formData.organizationType}
                        onValueChange={(value) => handleSelectChange('organizationType', value)}
                      >
                        <SelectTrigger data-testid="select-org-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Business/Corporation</SelectItem>
                          <SelectItem value="nonprofit">Non-profit Organization</SelectItem>
                          <SelectItem value="government">Government Agency</SelectItem>
                          <SelectItem value="education">Educational Institution</SelectItem>
                          <SelectItem value="healthcare">Healthcare Organization</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">Number of Employees *</Label>
                      <Select 
                        value={formData.employees}
                        onValueChange={(value) => handleSelectChange('employees', value)}
                      >
                        <SelectTrigger data-testid="select-employees">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10</SelectItem>
                          <SelectItem value="11-50">11-50</SelectItem>
                          <SelectItem value="51-100">51-100</SelectItem>
                          <SelectItem value="101-500">101-500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="website">Website (Optional)</Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={handleChange}
                      data-testid="input-website"
                    />
                  </div>
                </div>

                {/* AI Interest */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold">AI Interest & Goals</h3>
                  <div className="space-y-2">
                    <Label htmlFor="aiInterest">Current AI Experience *</Label>
                    <Select 
                      value={formData.aiInterest}
                      onValueChange={(value) => handleSelectChange('aiInterest', value)}
                    >
                      <SelectTrigger data-testid="select-ai-interest">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exploring">Just exploring - No AI implementation yet</SelectItem>
                        <SelectItem value="planning">Actively planning AI adoption</SelectItem>
                        <SelectItem value="piloting">Running pilot AI projects</SelectItem>
                        <SelectItem value="implementing">Actively implementing AI solutions</SelectItem>
                        <SelectItem value="advanced">Advanced - AI is core to our operations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="membershipGoals">What do you hope to gain from membership? *</Label>
                    <Textarea
                      id="membershipGoals"
                      name="membershipGoals"
                      rows={4}
                      placeholder="Tell us about your goals for joining the Council and how we can best support your AI journey"
                      value={formData.membershipGoals}
                      onChange={handleChange}
                      required
                      data-testid="textarea-goals"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="referralSource">How did you hear about us?</Label>
                    <Input
                      id="referralSource"
                      name="referralSource"
                      placeholder="e.g., Summit event, colleague referral, social media"
                      value={formData.referralSource}
                      onChange={handleChange}
                      data-testid="input-referral"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit-membership"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Membership Application'
                  )}
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Questions? Contact us at</p>
                <a href="mailto:membership@thurstonai.com" className="text-primary hover:underline">
                  membership@thurstonai.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}