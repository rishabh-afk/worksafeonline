"use client";

import React, { useState } from "react";
import PayPalButton from "./PayPalButton";
import PayPalScriptLoader from "./PayPalScriptLoader";

const PayPalCheckout: React.FC = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  const handleSuccess = (details: any) => {
    alert(`Transaction completed by ${details.payer.name.given_name}`);
    console.log("Payment details:", details);
  };

  const handleScriptLoad = () => {
    setIsScriptLoaded(true);
  };

  const handleScriptError = (error: ErrorEvent) => {
    setError("Failed to load PayPal SDK. Please try again later.");
    console.log("PayPal Script Load Error:", error);
  };

  const handleButtonError = (error: any) => {
    setError("Something went wrong during the transaction.");
    console.log("PayPal Button Error:", error);
  };

  return (
    <div className="p-6 max-w-lg mx-auto border rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        PayPal Checkout
      </h1>

      {/* Error Message */}
      {error && (
        <div className="text-red-500 bg-red-100 p-2 mb-4 rounded border border-red-300">
          {error}
        </div>
      )}

      {/* Load PayPal SDK */}
      {PAYPAL_CLIENT_ID && (
        <PayPalScriptLoader
          clientId={PAYPAL_CLIENT_ID}
          onLoad={handleScriptLoad}
          onError={handleScriptError}
        />
      )}

      {/* Render PayPal Button */}
      {isScriptLoaded ? (
        <PayPalButton
          amount="10.00"
          onSuccess={handleSuccess}
          onError={handleButtonError}
        />
      ) : (
        <div className="text-gray-500">Loading PayPal button...</div>
      )}
    </div>
  );
};

export default PayPalCheckout;
