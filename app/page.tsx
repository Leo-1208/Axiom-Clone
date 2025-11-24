"use client";

import Link from 'next/link';
import { useAppSelector } from '../hooks/useAppSelector';

/**
 * Home page acts as a marketing landing page for the Axiom clone. It
 * introduces the product with a bold headline, supporting text and a call
 * to action button. The background uses layered blurred panels to mimic
 * the original design while remaining performant. The navigation bar
 * handles authentication so the call to action simply links to the
 * discovery route which performs its own auth check.
 */
export default function Home() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  // The call to action link always points to the discovery page. If the
  // visitor is not signed in the discovery route will prompt them to log
  // in before showing any content.
  const ctaHref = isLoggedIn ? '/discovery' : '/discovery';
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950">
      {/* Decorative background layers */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none">
        <div className="h-[80%] w-[80%] bg-blue-800 rounded-3xl blur-3xl opacity-40 -translate-y-10" />
        <div className="absolute h-[65%] w-[65%] bg-blue-600 rounded-3xl blur-2xl opacity-40" />
        <div className="absolute h-[50%] w-[50%] bg-blue-500 rounded-3xl blur-xl opacity-50 translate-y-10" />
      </div>
      {/* Foreground content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          The Gateway to DeFi
        </h1>
        <p className="text-lg sm:text-xl text-blue-200 mb-8">
          Axiom is the only trading platform you'll ever need.
        </p>
        <Link
          href={ctaHref}
          className="inline-block px-8 py-3 rounded-md bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start Trading
        </Link>
        <div className="mt-10 text-gray-400 text-sm flex justify-center items-center gap-2">
          <span>Backed by</span>
          <span className="bg-white text-gray-800 px-2 py-1 rounded font-semibold">Y Combinator</span>
        </div>
      </div>
    </main>
  );
}