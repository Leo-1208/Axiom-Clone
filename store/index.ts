import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './slices/tokenSlice';
import authReducer from './slices/authSlice';

/**
 * The global Redux store for this application. Additional slices can be added
 * here as the app grows. Reducers should remain pure functions.
 */
export const store = configureStore({
  reducer: {
    tokens: tokenReducer,
    /**
     * Authentication slice controls whether the user is logged in. See
     * `store/slices/authSlice.ts` for reducer details.
     */
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;