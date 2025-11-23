import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store';

/**
 * A typed version of useSelector for selecting Redux state. This helper
 * prevents developers from accidentally selecting the wrong slice and
 * provides autocompletion for state fields.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;