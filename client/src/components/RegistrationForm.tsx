import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Loader2, AlertCircle } from 'lucide-react';

export default function RegistrationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestScholarship, setRequestScholarship] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          requestScholarship,
          paymentType: requestScholarship ? 'scholarship' : 'paid'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Registration Successful!",
          description: data.message || "You've reserved your seat for the inaugural summit.",
        });
        setFormData({ firstName: '', lastName: '', email: '', organization: '' });
      } else {
        toast({
          title: "Registration Failed",
          description: data.error || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Network Error",
        description: "Unable to submit registration. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">Reserve Your Seat</h3>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Badge variant="secondary" className="text-base">$25 Admission</Badge>
          <span className="text-muted-foreground">or</span>
          <Badge variant="outline" className="text-base">Request Scholarship</Badge>
        </div>
        <p className="text-muted-foreground mt-3">
          Seating is limited. Register now to secure your spot for this essential summit.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
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
              <Label htmlFor="lastName">Last Name</Label>
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
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
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
            <Label htmlFor="organization">Business/Organization</Label>
            <Input
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              data-testid="input-organization"
            />
          </div>

          {/* Scholarship Request */}
          <div className="p-4 bg-muted rounded-lg border">
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="scholarship" 
                checked={requestScholarship}
                onCheckedChange={(checked) => setRequestScholarship(checked as boolean)}
                data-testid="checkbox-scholarship"
              />
              <div className="space-y-1 leading-none">
                <Label htmlFor="scholarship" className="cursor-pointer">
                  Request a scholarship
                </Label>
                <p className="text-sm text-muted-foreground">
                  If the $25 registration fee presents a financial barrier, select this option. 
                  We believe cost should not prevent anyone from attending.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Note */}
          {!requestScholarship && (
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/20 flex gap-2">
              <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-primary">Payment Information</p>
                <p className="text-muted-foreground">
                  You'll receive payment instructions via email after registration. 
                  Payment is due within 48 hours to confirm your seat.
                </p>
              </div>
            </div>
          )}
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
            data-testid="button-register"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              requestScholarship ? 'Submit Scholarship Request' : 'Register & Continue to Payment'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}