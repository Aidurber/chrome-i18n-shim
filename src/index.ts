import { Tokens, PlaceholderValue } from './types';
import { getMessageShim } from './get-message';
export * from './get-message';
export * from './types';

/**
 * Setup the shim
 * @param tokens - Tokens
 */
export const setupGetMessageShim = (tokens: Tokens) => (
  key: string,
  values: PlaceholderValue = []
) => getMessageShim(tokens, key, values);
