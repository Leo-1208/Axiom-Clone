import './globals.css';
import React from 'react';
import { Providers } from './providers';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Axiom Token Pulse',
  description: 'Token discovery table replicating Axiom Trade Pulse',
  /**
   * Define a custom favicon for the site. By specifying the icons
   * property here, Next.js will automatically inject an appropriate
   * <link rel="icon" ...> into the document head. The provided
   * SVG should be placed in the public directory under the same name
   * so it is served statically at `/axiom-logo-marks.svg`.
   */
  icons: {
    icon: '/axiom-logo-marks.svg',
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