import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Terms of Use</CardTitle>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Thurston AI Business Council website and services ("Services"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our Services.
            </p>

            <h2>2. Use of Services</h2>
            <p>You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Interfere with or disrupt the Services</li>
              <li>Attempt to gain unauthorized access to any portion of the Services</li>
              <li>Use the Services to transmit malicious code or spam</li>
            </ul>

            <h2>3. Event Registration and Tickets</h2>
            <p>
              When registering for events:
            </p>
            <ul>
              <li>You must provide accurate and complete information</li>
              <li>Registrations are non-transferable unless otherwise specified</li>
              <li>Payment is required to secure your registration (unless a scholarship is granted)</li>
              <li>Refunds are subject to our Refund Policy</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and software, is the property of the Thurston AI Business Council or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>

            <h2>5. User Content</h2>
            <p>
              By submitting content to our Services (such as event feedback or forum posts), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute such content for the purpose of operating and promoting our Services.
            </p>

            <h2>6. Privacy</h2>
            <p>
              Your use of our Services is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information.
            </p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
              Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, the Thurston AI Business Council shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the Services.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless the Thurston AI Business Council, its affiliates, and their respective officers, directors, employees, and agents from any claims, losses, or damages arising from your use of the Services or violation of these Terms.
            </p>

            <h2>10. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website. Your continued use of the Services after such changes constitutes acceptance of the modified Terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Washington, without regard to its conflict of law provisions.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              If you have questions about these Terms, please contact us at:
            </p>
            <p>
              Thurston AI Business Council<br />
              Email: legal@thurstonai.org<br />
              Powered by American Marketing Alliance SPC
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}