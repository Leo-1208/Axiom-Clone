import './globals.css';
import React from 'react';
import { Providers } from './providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Axiom Token Pulse',
  description: 'Token discovery table replicating Axiom Trade Pulse',
};

/**
 * Root layout wraps the application with global providers and sets up
 * the document structure. This component is rendered on every page.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}