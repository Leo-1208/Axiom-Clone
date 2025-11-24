"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { login, logout } from '../store/slices/authSlice';
import * as Dialog from '@radix-ui/react-dialog';

/**
 * Primary navigation bar displayed on all pages. It contains links to the
 * homepage and buttons for signing in or creating an account. When a user
 * signs in or signs up, the component dispatches the appropriate auth
 * actions and navigates to the token discovery page. Logging out returns
 * the user to the home page.
 */
export default function NavBar() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Control visibility of sign in and sign up dialogs
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  // Capture form input values. Prepopulate with demo credentials so
  // users can quickly sign in without entering anything. In a real
  // application these would start empty and be validated by an API.
  const [email, setEmail] = useState('demo@axiom.com');
  const [password, setPassword] = useState('password');

  /**
   * Handle the sign in form submission. Simply marks the user as logged
   * in and redirects them to the discovery page. A real application would
   * perform validation and communicate with an authentication API.
   */
  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login());
    setOpenSignIn(false);
    router.push('/discovery');
  };

  /**
   * Handle the sign up form submission. For demonstration purposes we
   * immediately log the user in after collecting credentials. In a real
   * product this would send a registration request to a backend.
   */
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login());
    setOpenSignUp(false);
    router.push('/discovery');
  };

  /**
   * Sign out the current user and return them to the landing page.
   */
  const handleSignOut = () => {
    dispatch(logout());
    router.push('/');
  };

  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-700 bg-black text-white z-50">
      {/* Logo / Brand */}
      <Link href="/" className="text-xl font-bold">
        Axiom&nbsp;Pro
      </Link>
      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {!isLoggedIn ? (
          <>
            {/* Sign in dialog */}
            <Dialog.Root open={openSignIn} onOpenChange={setOpenSignIn}>
              <Dialog.Trigger asChild>
                <button className="px-4 py-2 text-sm font-medium text-blue-400 border border-blue-400 rounded-md hover:bg-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Login
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                {/* Use very high z-index values for the overlay and content so that dialogs always appear on top of the page content. */}
                <Dialog.Overlay className="fixed inset-0 bg-black/70 z-[2000]" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-[2001] w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-900 p-6 text-white shadow-lg focus:outline-none">
                  <Dialog.Title className="text-lg font-semibold mb-4">Sign In</Dialog.Title>
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-500 bg-gray-800 rounded p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border border-gray-500 bg-gray-800 rounded p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Sign In
                    </button>
                  </form>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            {/* Sign up dialog */}
            <Dialog.Root open={openSignUp} onOpenChange={setOpenSignUp}>
              <Dialog.Trigger asChild>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Sign Up
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                {/* Use very high z-index values for the overlay and content so that dialogs always appear on top of the page content. */}
                <Dialog.Overlay className="fixed inset-0 bg-black/70 z-[2000]" />
                <Dialog.Content className="fixed left-1/2 top-1/2 z-[2001] w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-900 p-6 text-white shadow-lg focus:outline-none">
                  <Dialog.Title className="text-lg font-semibold mb-4">Create Account</Dialog.Title>
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-500 bg-gray-800 rounded p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border border-gray-500 bg-gray-800 rounded p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Sign Up
                    </button>
                  </form>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </>
        ) : (
          <button
            onClick={handleSignOut}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}