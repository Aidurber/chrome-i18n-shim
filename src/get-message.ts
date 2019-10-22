import { Tokens, PlaceholderValue } from './types';
import { getFormatter } from './formatters';

/**
 * Shim get messages
 *
 * @export
 * @param {Tokens} tokens - Dictionary of tokens
 * @param {string} key - The token key to find in the resources
 * @param {PlaceholderValue} [values=[]] - Optional: Values to replace, only used when message has a `placeholders` property.  See: https://developer.chrome.com/apps/i18n#examples-getMessage
 * @returns
 */
export function getMessageShim(
  tokens: Tokens,
  key: string,
  values: PlaceholderValue = []
) {
  const safeTokens = tokens || {};
  const match = safeTokens[key];
  if (typeof match === 'undefined') {
    return null;
  }
  return getFormatter(match)(safeTokens, key, values);
}
