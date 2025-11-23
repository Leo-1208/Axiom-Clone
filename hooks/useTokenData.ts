"use client";

import { useQuery } from '@tanstack/react-query';
import { initialTokens } from '../data/initialTokens';
import type { TokenCategory, Token } from '../store/slices/tokenSlice';

/**
 * Simulates fetching token data from a backend service. In a production
 * environment this would be replaced with a call to a remote API. A small
 * artificial delay is introduced to showcase the loading state.
 */
async function fetchTokens(): Promise<Token[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialTokens);
    }, 800);
  });
}

/**
 * A custom hook that fetches and filters tokens by category using React Query.
 * It caches results and automatically deduplicates network requests.
 *
 * @param category Optional category filter to return only tokens within that category.
 */
export function useTokenData(category?: TokenCategory) {
  return useQuery({
    queryKey: ['tokens'],
    queryFn: fetchTokens,
    select: (data: Token[]) => {
      return category ? data.filter((token) => token.category === category) : data;
    },
    // Refetch periodically to ensure data remains reasonably fresh
    refetchInterval: 30_000,
  });
}