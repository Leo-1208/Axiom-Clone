"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// Instantiate a single query client for the entire app. See
// https://tanstack.com/query/v5/docs/react/reference/QueryClient for details.
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}