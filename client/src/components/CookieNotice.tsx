import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show notice after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <Card className="max-w-4xl mx-auto shadow-lg pointer-events-auto bg-background/95 backdrop-blur">
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">We use cookies</p>
              <p className="text-sm text-muted-foreground">
                This website uses cookies to enhance your browsing experience and provide personalized content. 
                By continuing to use our site, you consent to our use of cookies. Learn more in our{' '}
                <Link href="/privacy">
                  <a className="underline hover:text-primary">Privacy Policy</a>
                </Link>.
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDecline}
              className="shrink-0"
              data-testid="button-close-cookie"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2 mt-4">
            <Button 
              onClick={handleAccept} 
              size="sm"
              data-testid="button-accept-cookies"
            >
              Accept Cookies
            </Button>
            <Button 
              onClick={handleDecline} 
              variant="outline" 
              size="sm"
              data-testid="button-decline-cookies"
            >
              Decline
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}