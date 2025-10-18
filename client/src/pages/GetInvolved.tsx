import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Mic, Heart, Building } from 'lucide-react';

export default function GetInvolved() {
  const handleSponsorClick = () => {
    window.location.href = 'mailto:sponsors@thurstonai.com?subject=Inaugural Summit Sponsorship Inquiry';
    console.log('Sponsor inquiry initiated');
  };

  const handleSpeakerClick = () => {
    window.location.href = 'mailto:speakers@thurstonai.com?subject=Speaker Application - Thurston AI Business Council';
    console.log('Speaker application initiated');
  };

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="bg-background py-16 md:py-24 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Help Build Our Community
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Join us in creating a thriving AI-ready business ecosystem in Thurston County
            </p>
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sponsors Column */}
            <Card className="h-full">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Become an Inaugural Summit Sponsor
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We are seeking sponsors to provide coffee, breakfast, and A/V support for our 
                  inaugural summit. Showcase your brand as a foundational leader in bringing AI 
                  education to our community.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-lg">Sponsorship Benefits:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Logo placement on all event materials and website</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Recognition during opening remarks</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Networking opportunities with local business leaders</span>
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Position as a founding supporter of the Council</span>
                    </li>
                  </ul>
                </div>
                
                <Button 
                  onClick={handleSponsorClick}
                  size="lg"
                  className="w-full"
                  data-testid="button-sponsor-inquiry"
                >
                  Learn More About Sponsorship
                </Button>
              </CardContent>
            </Card>

            {/* Speakers Column */}
            <Card className="h-full">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Speak at a Future Event
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Are you a local expert using AI in your business? We want to hear from you for 
                  our future event panels. Share your insights and help other businesses learn from 
                  your experience.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-lg">We're Looking For:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <Building className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Business owners successfully implementing AI</span>
                    </li>
                    <li className="flex items-start">
                      <Building className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Non-profit leaders leveraging AI for impact</span>
                    </li>
                    <li className="flex items-start">
                      <Building className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Technical experts with practical insights</span>
                    </li>
                    <li className="flex items-start">
                      <Building className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Educators preparing workforce for AI</span>
                    </li>
                  </ul>
                </div>
                
                <Button 
                  onClick={handleSpeakerClick}
                  size="lg"
                  className="w-full"
                  data-testid="button-speaker-application"
                >
                  Become a Speaker
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Encouragement */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Together, We Build the Future
          </h2>
          <p className="text-lg text-muted-foreground">
            The Thurston AI Business Council is more than an organization—it's a movement to ensure 
            our community thrives in the age of artificial intelligence. Whether you sponsor, speak, 
            or simply attend, your participation helps create a stronger, smarter Thurston County.
          </p>
        </div>
      </section>
    </div>
  );
}