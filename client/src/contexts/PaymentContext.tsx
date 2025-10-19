import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface PaymentContextType {
  paymentSuccess: boolean;
  registrationId: string | null;
  setPaymentSuccess: (success: boolean, registrationId?: string) => void;
  clearPaymentSuccess: () => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: ReactNode }) {
  const [paymentSuccess, setPaymentSuccessState] = useState(false);
  const [registrationId, setRegistrationId] = useState<string | null>(null);

  // Check URL parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("payment") === "success") {
      const regId = params.get("registration");
      setPaymentSuccessState(true);
      setRegistrationId(regId);
      
      // Clean up the URL to remove the query parameters
      const url = new URL(window.location.href);
      url.searchParams.delete("payment");
      url.searchParams.delete("registration");
      window.history.replaceState({}, document.title, url.pathname);
    }
  }, []);

  const setPaymentSuccess = (success: boolean, regId?: string) => {
    setPaymentSuccessState(success);
    setRegistrationId(regId || null);
  };

  const clearPaymentSuccess = () => {
    setPaymentSuccessState(false);
    setRegistrationId(null);
  };

  return (
    <PaymentContext.Provider 
      value={{ 
        paymentSuccess, 
        registrationId,
        setPaymentSuccess, 
        clearPaymentSuccess 
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export function usePayment() {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
}