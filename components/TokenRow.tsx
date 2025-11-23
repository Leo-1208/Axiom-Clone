"use client";

import React, { useEffect, useRef, useState } from 'react';
import type { Token } from '../store/slices/tokenSlice';
import * as Popover from '@radix-ui/react-popover';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Dialog from '@radix-ui/react-dialog';

interface TokenRowProps {
  token: Token;
}

/**
 * Displays a single token within the table. The row includes a tooltip for
 * quick details, a popover for expanded info, and a modal stub for trading.
 * It also highlights the row briefly when the price changes to show live
 * updates, using a fading color transition.
 */
export default function TokenRow({ token }: TokenRowProps) {
  const prevPriceRef = useRef(token.price);
  const [highlight, setHighlight] = useState<'up' | 'down' | null>(null);

  // Determine when the price has changed and set a temporary highlight.
  useEffect(() => {
    if (prevPriceRef.current !== token.price) {
      if (token.price > prevPriceRef.current) {
        setHighlight('up');
      } else {
        setHighlight('down');
      }
      prevPriceRef.current = token.price;
      // Clear the highlight after a second to return the row to its default state.
      const timeout = setTimeout(() => setHighlight(null), 1000);
      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.price]);

  const changeClass = token.change24h > 0 ? 'text-green-600' : token.change24h < 0 ? 'text-red-600' : '';

  return (
    <tr
      className={`transition-colors ${
        highlight === 'up' ? 'price-up' : highlight === 'down' ? 'price-down' : ''
      } hover:bg-gray-100`}
    >
      <td className="px-4 py-3 whitespace-nowrap">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <span className="font-medium cursor-pointer text-gray-900">{token.name}</span>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="top"
              className="rounded-md bg-gray-900 text-white px-2 py-1 text-xs shadow-lg"
            >
              {token.symbol} — ${token.price.toFixed(4)}
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">${token.price.toFixed(4)}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span className={changeClass}>{token.change24h.toFixed(2)}%</span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap hidden sm:table-cell">{token.volume.toLocaleString()}</td>
      <td className="px-4 py-3 whitespace-nowrap hidden md:table-cell">{token.marketCap.toLocaleString()}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button className="text-blue-600 hover:underline focus:outline-none">Details</button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              sideOffset={4}
              className="p-4 rounded-md bg-white border border-gray-200 shadow-lg w-56 text-sm"
            >
              <p className="font-semibold mb-2">{token.name} details</p>
              <p>Symbol: {token.symbol}</p>
              <p>Volume: {token.volume.toLocaleString()}</p>
              <p>Market cap: {token.marketCap.toLocaleString()}</p>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="text-blue-600 hover:underline focus:outline-none">Trade</button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40" />
            <Dialog.Content className="fixed left-1/2 top-1/2 w-80 max-w-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6">
              <Dialog.Title className="text-lg font-semibold mb-4">Trade {token.name}</Dialog.Title>
              <Dialog.Description className="text-sm mb-4">
                This is a mock trade modal. Implement trading logic here.
              </Dialog.Description>
              <button
                onClick={() => {
                  /* stubbed - handle trade here */
                }}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Confirm trade
              </button>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </td>
    </tr>
  );
}