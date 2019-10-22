import { Tokens } from '../types';

/**
 * Get the text message
 * @param tokens - Dictionary of messages
 * @param key - Token key
 */
export function textFormatter(tokens: Tokens, key: string) {
  return tokens[key].message;
}
