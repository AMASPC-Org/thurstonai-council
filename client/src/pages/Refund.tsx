import { Link } from 'wouter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function Refund() {
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
            <CardTitle className="text-3xl">Event Refund Policy</CardTitle>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <h2>1. General Policy</h2>
            <p>
              The Thurston AI Business Council is committed to providing valuable events and experiences to our community. We understand that circumstances may change, and we aim to be fair and reasonable with our refund policy while ensuring the sustainability of our events.
            </p>

            <h2>2. Summit and Workshop Registrations</h2>
            
            <h3>Full Refunds</h3>
            <p>You are eligible for a full refund if:</p>
            <ul>
              <li>You cancel your registration at least 7 days before the event date</li>
              <li>The event is cancelled by the Thurston AI Business Council</li>
              <li>The event is rescheduled and you cannot attend the new date</li>
            </ul>

            <h3>Partial Refunds (50%)</h3>
            <p>You are eligible for a 50% refund if:</p>
            <ul>
              <li>You cancel your registration 3-6 days before the event date</li>
            </ul>

            <h3>No Refunds</h3>
            <p>Refunds are not available if:</p>
            <ul>
              <li>You cancel less than 3 days before the event</li>
              <li>You do not attend the event (no-show)</li>
              <li>You are removed from the event due to violation of our code of conduct</li>
            </ul>

            <h2>3. Scholarship Recipients</h2>
            <p>
              If you received a scholarship to attend an event, please notify us as soon as possible if you cannot attend so we can offer the opportunity to another community member. Scholarship recipients who no-show without notice may not be eligible for future scholarships.
            </p>

            <h2>4. Transferring Registrations</h2>
            <p>
              If you cannot attend an event, you may transfer your registration to another person from your organization up to 24 hours before the event. Please contact us to arrange the transfer.
            </p>

            <h2>5. Force Majeure</h2>
            <p>
              In the event of circumstances beyond our control (including but not limited to natural disasters, pandemics, government restrictions, or venue issues), we may need to cancel, postpone, or move events online. In such cases:
            </p>
            <ul>
              <li>For cancellations: Full refunds will be provided</li>
              <li>For postponements: You may choose to attend the rescheduled event or receive a full refund</li>
              <li>For virtual conversions: You may choose to attend virtually or receive a partial refund (amount determined based on the specific event)</li>
            </ul>

            <h2>6. How to Request a Refund</h2>
            <p>
              To request a refund, please email us at refunds@thurstonai.org with:
            </p>
            <ul>
              <li>Your registration confirmation number</li>
              <li>The name and date of the event</li>
              <li>The reason for your refund request</li>
            </ul>
            <p>
              Refund requests are typically processed within 5-7 business days. Refunds will be issued to the original payment method.
            </p>

            <h2>7. Special Circumstances</h2>
            <p>
              We understand that unexpected situations arise. If you have special circumstances not covered by this policy (such as medical emergencies or family emergencies), please contact us. We will review these on a case-by-case basis and try to accommodate when possible.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have questions about our refund policy or need assistance, please contact:
            </p>
            <p>
              Thurston AI Business Council<br />
              Email: refunds@thurstonai.org<br />
              Phone: (360) 555-0100<br />
              Powered by American Marketing Alliance SPC
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}