"use client";

import React, { useState } from 'react';
import TokenTable from '../components/TokenTable';
import type { TokenCategory } from '../store/slices/tokenSlice';

const categories: { key: TokenCategory; label: string }[] = [
  { key: 'new', label: 'New Pairs' },
  { key: 'final', label: 'Final Stretch' },
  { key: 'migrated', label: 'Migrated' },
];

/**
 * Top‑level page component rendering a tabbed token discovery table. It
 * remembers the current category in component state and passes it to the
 * TokenTable component. Each tab uses Tailwind styling and is keyboard
 * focusable for accessibility.
 */
export default function HomePage() {
  const [active, setActive] = useState<TokenCategory>('new');
  const [query, setQuery] = useState('');

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Token Discovery</h1>
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tokens..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-md border border-gray-300 p-2 text-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div role="tablist" aria-label="Token categories" className="mb-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            role="tab"
            aria-selected={active === cat.key}
            className={`px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              active === cat.key ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {/* Table for selected category */}
      <TokenTable category={active} search={query} />
    </main>
  );
}