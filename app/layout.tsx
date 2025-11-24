import './globals.css';
import React from 'react';
import { Providers } from './providers';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Axiom Token Pulse',
  description: 'Token discovery table replicating Axiom Trade Pulse',
  icons: {
    icon: [
      {
        url: '/6534601.jpg',
        type: 'image/jpeg',
        sizes: '32x32'
      },
      // optional fallback (recommended on Vercel)
      {
        url: '/favicon.ico',
        sizes: 'any'
      }
    ],
  },
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
        <Providers>
          {/* Global navigation bar appears on all pages */}
          <NavBar />
          {children}
          {/* Global footer displayed at the bottom of every page */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
