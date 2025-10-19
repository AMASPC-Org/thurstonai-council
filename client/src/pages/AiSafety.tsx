import { Shield, Lock, Brain, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AiSafety() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">AI & Data Safety</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your trust is our foundation. Learn how we protect your data and ensure ethical AI practices.
        </p>
      </div>

      {/* Our Commitment to Your Data */}
      <Card className="mb-8" data-testid="card-data-commitment">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">Our Commitment to Your Data</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground">
              The Thurston AI Business Council takes your privacy seriously. We are committed to protecting your personal information and being transparent about how we use it.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>We never sell or share your personal information with third parties for marketing purposes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>All personal data is encrypted both in transit and at rest using industry-standard protocols</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>You maintain full control over your data and can request deletion at any time</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>We collect only the minimum information necessary to provide our services</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Regular security audits ensure your data remains protected</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Secure Payment Processing */}
      <Card className="mb-8" data-testid="card-payment-security">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Lock className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">Secure Payment Processing via Stripe</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground">
              Your financial security is paramount. We partner with Stripe, a world-leading payment processor trusted by millions of businesses.
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>We never store your credit card information on our servers</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>All payment processing is handled directly by Stripe's PCI-compliant infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Stripe uses advanced fraud detection powered by machine learning</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Your payment data is encrypted with AES-256 and transmitted over TLS</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Full compliance with PCI DSS Level 1 certification standards</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> When you register for events through our platform, you'll be redirected to Stripe's secure checkout page. Look for the padlock icon in your browser's address bar to confirm you're on a secure connection.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ethical AI Philosophy */}
      <Card data-testid="card-ethical-ai">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">Our Ethical AI Philosophy</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground">
              As advocates for responsible AI adoption, we practice what we preach. Our AI assistant is designed with ethics at its core.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Transparency</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Our AI assistant clearly identifies itself as artificial intelligence</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>We disclose that responses are generated using Google's Gemini AI technology</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>AI limitations and capabilities are openly communicated</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Privacy-First Design</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Conversations with our AI assistant are not stored permanently</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>No conversation data is used to train or improve AI models</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Chat sessions are isolated and not accessible to other users</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Responsible Use</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Our AI is programmed to provide helpful, accurate, and unbiased information</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>We continuously monitor and improve AI responses for quality and safety</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Human oversight ensures AI recommendations align with community values</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <div className="mt-12 text-center p-8 bg-muted rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Questions About Our Safety Practices?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We're here to help. If you have any questions or concerns about how we protect your data or our AI practices, please don't hesitate to reach out.
        </p>
        <p className="text-foreground">
          Contact us at: <a href="mailto:privacy@thurstonai.org" className="text-primary hover:underline">privacy@thurstonai.org</a>
        </p>
      </div>
    </div>
  );
}