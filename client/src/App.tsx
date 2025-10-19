import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PaymentProvider } from "@/contexts/PaymentContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Summit from "@/pages/Summit";
import GetInvolved from "@/pages/GetInvolved";
import Sponsorship from "@/pages/Sponsorship";
import SpeakerApplication from "@/pages/SpeakerApplication";
import PartnershipOpportunities from "@/pages/PartnershipOpportunities";
import MembershipApplication from "@/pages/MembershipApplication";
import NotFound from "@/pages/not-found";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Refund from "@/pages/Refund";
import AiSafety from "@/pages/AiSafety";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
import Profile from "@/pages/Profile";
import CookieNotice from "@/components/CookieNotice";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/summit" component={Summit} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route path="/sponsorship" component={Sponsorship} />
          <Route path="/speaker-application" component={SpeakerApplication} />
          <Route path="/partnership" component={PartnershipOpportunities} />
          <Route path="/membership-application" component={MembershipApplication} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/refund" component={Refund} />
          <Route path="/ai-safety" component={AiSafety} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/profile" component={Profile} />
          {/* Fallback to 404 */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaymentProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <CookieNotice />
        </TooltipProvider>
      </PaymentProvider>
    </QueryClientProvider>
  );
}

export default App;
