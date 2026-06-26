"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-octo-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-octo-red/20 mb-4">500</div>
        <h1 className="text-2xl font-bold text-octo-dark mb-2">Something Went Wrong</h1>
        <p className="text-octo-gray-500 mb-8">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <Button onClick={reset}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
