"use client";

import { useEffect } from 'react';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { updateTokenPrice } from '../store/slices/tokenSlice';

/**
 * A hook that simulates a WebSocket price feed by periodically adjusting
 * token prices by a small random delta. This mock avoids the need for a
 * real WebSocket connection while exercising the same update pathways.
 *
 * @param intervalMs How often to push price updates in milliseconds.
 */
export function useMockPriceFeed(intervalMs = 5000): void {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.tokens.items);

  useEffect(() => {
    // Skip when there are no tokens loaded yet.
    if (!tokens.length) return;

    const id = setInterval(() => {
      tokens.forEach((token) => {
        // Generate a small random price change within ±1% of the current price
        const changePercent = (Math.random() - 0.5) * 0.02;
        const newPrice = token.price * (1 + changePercent);
        const newChange = token.change24h + changePercent * 100;
        dispatch(
          updateTokenPrice({
            id: token.id,
            price: parseFloat(newPrice.toFixed(4)),
            change24h: parseFloat(newChange.toFixed(2)),
          }),
        );
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [tokens, dispatch, intervalMs]);
}