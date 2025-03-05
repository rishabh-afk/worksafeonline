"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log("An error occurred:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 text-center">
      <h2 className="text-lg font-semibold text-red-800">
        Oops! Something went wrong.
      </h2>
      <p className="mt-2 text-sm text-red-600">
        We encountered an unexpected error. Please try again later.
      </p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Try Again
      </button>
    </div>
  );
}
