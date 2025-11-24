"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 inset-x-0 bg-black text-gray-400 px-4 py-8 border-t border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Brand */}
        <div className="flex items-center space-x-2 text-white">
          {/* Axiom triangle logo recreated using CSS shapes */}
          <span className="w-4 h-4 border-b-8 border-l-8 border-b-transparent border-l-transparent border-t-8 border-r-8 border-t-white border-r-white inline-block" />
          <span className="font-semibold text-lg">AXIOM&nbsp;Pro</span>
        </div>

        {/* Centre: Copyright */}
        <div className="text-sm text-gray-500">
          © {year} Axiom. All rights reserved.
        </div>

        {/* Right: Links and social icons */}
        <div className="flex items-center space-x-4 text-sm">
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/docs" className="hover:text-white transition-colors">
            Docs
          </Link>

          {/* X (Twitter) icon */}
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 001.88-2.35 8.6 8.6 0 01-2.71 1.04 4.28 4.28 0 00-7.3 3.9A12.16 12.16 0 013 4.79a4.28 4.28 0 001.32 5.71 4.2 4.2 0 01-1.93-.53v.05a4.28 4.28 0 003.44 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.98 2.96A8.59 8.59 0 012 19.54a12.1 12.1 0 006.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19-.01-.38-.02-.57A8.7 8.7 0 0024 5.3a8.7 8.7 0 01-2.54.7z" />
            </svg>
          </a>

          {/* Discord icon */}
          <a
            href="#"
            aria-label="Discord"
            className="hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M20.317 4.369A19.791 19.791 0 0015.236 3C15.07 3 14.91 3.078 14.817 3.211a13.206 13.206 0 00-5.634 0A.54.54 0 008.762 3c-2.772.044-5.385.926-7.555 2.573-.164.12-.244.323-.207.521a19.774 19.774 0 001.916 7.795.543.543 0 00.3.308A14.827 14.827 0 005.7 15.42a.549.549 0 00.494-.13l.543-.412c-1.898-.512-3.67-1.334-5.258-2.435a.544.544 0 00-.533-.05.55.55 0 00-.293.353 17.21 17.21 0 004.641 5.535.546.546 0 00.607.015 14.824 14.824 0 0013.546 0 .548.548 0 00.607-.016 17.22 17.22 0 004.642-5.535.55.55 0 00-.292-.353.544.544 0 00-.533.05 17.956 17.956 0 01-5.259 2.435l.544.412a.55.55 0 00.494.13c1.784-.225 3.508-.807 5.148-1.72a.542.542 0 00.301-.307 19.776 19.776 0 001.915-7.796.54.54 0 00-.207-.52zM9.545 11.479c-.88 0-1.6-.8-1.6-1.779 0-.977.71-1.776 1.6-1.776.894 0 1.608.799 1.608 1.776 0 .978-.714 1.779-1.608 1.779zm5.091 0c-.88 0-1.6-.8-1.6-1.779 0-.977.71-1.776 1.6-1.776.894 0 1.608.799 1.608 1.776 0 .978-.714 1.779-1.608 1.779z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
