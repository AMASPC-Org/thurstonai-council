import { Link } from 'wouter';
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import EventAgenda from '@/components/EventAgenda';
import RegistrationForm from '@/components/RegistrationForm';
import { usePayment } from '@/contexts/PaymentContext';
import { useToast } from '@/hooks/use-toast';

export default function Summit() {
  const { paymentSuccess, registrationId } = usePayment();
  const { toast } = useToast();

  useEffect(() => {
    // Show toast based on payment context state
    if (paymentSuccess) {
      // Show success toast
      toast({
        title: "Payment Successful!",
        description: "Your registration for the summit is confirmed. Check your email for details.",
        duration: 5000,
      });
    }
    
    // Also check URL for cancelled payment (not tracked in context)
    const params = new URLSearchParams(window.location.search);
    if (params.get("payment") === "cancelled") {
      // Show cancellation toast
      toast({
        title: "Payment Cancelled",
        description: "Your registration was not completed. You can try again when you're ready.",
        variant: "destructive",
        duration: 5000,
      });
    }
  }, [paymentSuccess, toast]);

  return (
    <div className="min-h-screen">
      {/* Page Hero with Event Logo */}
      <section className="bg-background py-16 md:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="flex flex-col items-center space-y-2">
                <svg
                  viewBox="0 0 200 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 md:h-20"
                >
                  {/* Capitol Dome */}
                  <g>
                    <path
                      d="M30 25 L30 18 M30 18 L28 16 L32 16 Z"
                      stroke="hsl(216, 82%, 28%)"
                      strokeWidth="1.5"
                      fill="hsl(216, 82%, 28%)"
                    />
                    <path
                      d="M25 25 Q30 22 35 25 L35 35 L25 35 Z"
                      stroke="hsl(216, 82%, 28%)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <rect x="27" y="35" width="2" height="8" fill="hsl(216, 82%, 28%)" />
                    <rect x="31" y="35" width="2" height="8" fill="hsl(216, 82%, 28%)" />
                    <rect x="23" y="43" width="14" height="2" fill="hsl(216, 82%, 28%)" />
                  </g>
                  
                  {/* Mount Rainier */}
                  <g>
                    <path
                      d="M10 45 L20 30 L24 35 L30 28 L36 35 L40 30 L50 45 Z"
                      fill="hsl(216, 82%, 28%)"
                      opacity="0.3"
                    />
                  </g>
                  
                  {/* Circuit Pattern */}
                  <g opacity="0.5">
                    <circle cx="15" cy="50" r="1.5" fill="hsl(216, 82%, 28%)" />
                    <circle cx="45" cy="50" r="1.5" fill="hsl(216, 82%, 28%)" />
                    <path d="M15 50 L20 50 L20 55 L40 55 L40 50 L45 50" stroke="hsl(216, 82%, 28%)" strokeWidth="1" fill="none" />
                    <circle cx="30" cy="55" r="1.5" fill="hsl(216, 82%, 28%)" />
                  </g>
                  
                  {/* Text */}
                  <text x="65" y="40" fontSize="14" fontWeight="800" fill="hsl(216, 82%, 28%)" fontFamily="IBM Plex Mono, monospace" letterSpacing="0.05em">
                    INAUGURAL SUMMIT 2026
                  </text>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              The Inaugural Thurston AI Business Summit
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the Thurston AI Business Council for its Inaugural Summit 2026, a focused 90-minute event 
              designed for local business, government, education, and healthcare leaders. This impactful summit 
              will feature a leading keynote speaker and an expert cross-sector panel providing immediate, 
              actionable insights into AI's opportunities and challenges within Thurston County. Don't miss 
              this essential event for just $25. Scholarships are available to ensure broad community access.
            </p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Date</h3>
                  <p className="text-muted-foreground">Tuesday, January 20, 2026</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Time</h3>
                  <p className="text-muted-foreground">9:00 AM - 10:30 AM</p>
                  <p className="text-sm text-muted-foreground">Doors open 8:30 AM</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start space-x-4">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Registration</h3>
                  <Badge variant="secondary" className="mt-1">$25 ADMISSION</Badge>
                  <p className="text-sm text-muted-foreground mt-1">Scholarships available</p>
                  <p className="text-sm text-muted-foreground">Limited seating</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Venue Partner */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Hosted in Partnership with the Thurston Economic Development Council (EDC)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                We are proud to partner with the Thurston EDC to host this inaugural event at their 
                state-of-the-art facility.
              </p>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Location</h3>
                      <address className="text-muted-foreground not-italic">
                        Thurston Economic Development Council<br />
                        4220 6th Ave SE<br />
                        Lacey, WA 98503
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Google Maps Embed */}
            <div className="w-full h-80 md:h-96 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.1234567890!2d-122.7654321!3d47.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAwJzQ0LjQiTiAxMjLCsDQ1JzU1LjYiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thurston EDC Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Event Agenda
          </h2>
          <EventAgenda />
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RegistrationForm />
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Be Part of the Inaugural Summit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sponsors Column */}
            <Card className="h-full">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Become an Inaugural Summit Sponsor
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Join us as a founding sponsor and showcase your commitment to advancing AI literacy 
                  in Thurston County. Limited sponsorship opportunities available.
                </p>
                <Link href="/sponsorship">
                  <Button 
                    size="lg"
                    className="w-full"
                    data-testid="button-sponsorship-info"
                  >
                    Learn More About Sponsorship
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Speakers Column */}
            <Card className="h-full">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Speak at a Future Event
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Share your AI implementation experience with the community. We're seeking local 
                  leaders and experts for upcoming panels and presentations.
                </p>
                <Link href="/speaker-application">
                  <Button 
                    size="lg"
                    className="w-full"
                    data-testid="button-speaker-application"
                  >
                    Apply to Become a Speaker
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}