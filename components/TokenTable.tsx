"use client";

import React, { useState, useMemo } from 'react';
import { useTokenData } from '../hooks/useTokenData';
import SkeletonRow from './SkeletonRow';
import TokenRow from './TokenRow';
import type { TokenCategory } from '../store/slices/tokenSlice';
import { useMockPriceFeed } from '../hooks/useMockPriceFeed';

interface TokenTableProps {
  category: TokenCategory;
  /**
   * Optional search query to filter tokens by name or symbol. Case insensitive.
   */
  search?: string;
}

/**
 * Displays a sortable table of tokens for a given category. It shows loading
 * skeletons while data is being fetched, handles errors gracefully, and
 * updates prices in real time via the mock price feed. Column headers
 * toggle between ascending and descending order on click.
 */
export default function TokenTable({ category, search = '' }: TokenTableProps) {
  const { data, isLoading, isError } = useTokenData(category);
  useMockPriceFeed(5000);

  // Keys for sorting; adjust to match Token properties
  type SortKey = 'price' | 'change24h' | 'volume' | 'marketCap';
  const [sortKey, setSortKey] = useState<SortKey>('price');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');

  const onSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  const sortedTokens = useMemo(() => {
    if (!data) return [];
    // Apply search filter before sorting. If search is empty, skip filtering.
    const filtered = search
      ? data.filter(
          (t) =>
            t.name.toLowerCase().includes(search.toLowerCase()) ||
            t.symbol.toLowerCase().includes(search.toLowerCase()),
        )
      : data;
    return [...filtered].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortDir, search]);

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th
              className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
              onClick={() => onSort('price')}
            >
              Price {sortKey === 'price' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th
              className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
              onClick={() => onSort('change24h')}
            >
              24h % {sortKey === 'change24h' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th
              className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hidden sm:table-cell"
              onClick={() => onSort('volume')}
            >
              Volume {sortKey === 'volume' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th
              className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hidden md:table-cell"
              onClick={() => onSort('marketCap')}
            >
              Mkt Cap {sortKey === 'marketCap' ? (sortDir === 'asc' ? '▲' : '▼') : ''}
            </th>
            <th className="px-4 py-3" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm">
          {isLoading && <SkeletonRow count={5} />}
          {isError && (
            <tr>
              <td colSpan={7} className="px-4 py-6 text-center text-red-600">
                Failed to load tokens.
              </td>
            </tr>
          )}
          {!isLoading && data &&
            sortedTokens.map((token) => <TokenRow key={token.id} token={token} />)}
        </tbody>
      </table>
    </div>
  );
}