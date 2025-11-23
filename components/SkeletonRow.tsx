"use client";

import React from 'react';

/**
 * Renders a skeleton placeholder for table rows while token data is loading.
 * The shimmer effect is defined globally in globals.css. Adjust the number
 * of columns to match your TokenRow implementation.
 */
export default function SkeletonRow({ count = 5 }: { count?: number }) {
  const rows = Array.from({ length: count }, (_, i) => i);
  return (
    <>
      {rows.map((i) => (
        <tr key={i} className="animate-pulse">
          <td className="px-4 py-3">
            <div className="h-4 w-24 rounded shimmer" />
          </td>
          <td className="px-4 py-3">
            <div className="h-4 w-16 rounded shimmer" />
          </td>
          <td className="px-4 py-3">
            <div className="h-4 w-16 rounded shimmer" />
          </td>
          <td className="px-4 py-3 hidden sm:table-cell">
            <div className="h-4 w-24 rounded shimmer" />
          </td>
          <td className="px-4 py-3 hidden md:table-cell">
            <div className="h-4 w-24 rounded shimmer" />
          </td>
        </tr>
      ))}
    </>
  );
}