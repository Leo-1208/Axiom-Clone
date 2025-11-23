import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';

/**
 * A typed version of useDispatch for dispatching Redux actions. This ensures
 * your dispatch calls are strongly typed and prevents accidental misuse.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;