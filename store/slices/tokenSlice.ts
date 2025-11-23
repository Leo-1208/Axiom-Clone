import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Token categories represented in the UI. These mirror the tabs in the
 * Axiom Pulse table. Additional categories may be added as needed.
 */
export type TokenCategory = 'new' | 'final' | 'migrated';

/**
 * Describes a single token's public data displayed in the table. The fields
 * here should correspond to the columns of your UI. Extra metadata can be
 * appended as the app evolves.
 */
export interface Token {
  id: string;
  name: string;
  symbol: string;
  category: TokenCategory;
  price: number;
  change24h: number;
  volume: number;
  marketCap: number;
}

interface TokensState {
  items: Token[];
  loading: boolean;
  error?: string;
}

const initialState: TokensState = {
  items: [],
  loading: false,
};

const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<Token[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    updateTokenPrice(state, action: PayloadAction<{ id: string; price: number; change24h: number }>) {
      const { id, price, change24h } = action.payload;
      const token = state.items.find((t) => t.id === id);
      if (token) {
        token.price = price;
        token.change24h = change24h;
      }
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
  },
});

export const { setTokens, updateTokenPrice, setLoading, setError } = tokensSlice.actions;
export default tokensSlice.reducer;