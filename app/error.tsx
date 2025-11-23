"use client";

import React, { useEffect } from 'react';

/**
 * Global error boundary for the app. This component is rendered when an
 * uncaught error is thrown within any page or component in the app router.
 * It allows resetting the error state by calling the provided reset function.
 */
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an external service if desired
    console.error('Unhandled error:', error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
      <p className="mb-4 text-gray-600">{error.message}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}