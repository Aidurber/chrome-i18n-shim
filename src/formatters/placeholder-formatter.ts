import { Tokens, PlaceholderValue, Placeholders } from '../types';
import { removeDollars } from '../util';

/**
 * Format a message which has placeholders
 *
 * @export
 * @param {Tokens} tokens
 * @param {string} key
 * @param {PlaceholderValue} [values=[]]
 * @returns
 */
export function placeholderFormatter(
  tokens: Tokens,
  key: string,
  values: PlaceholderValue = []
) {
  const { message, placeholders } = tokens[key];
  const tokenReplacer = createTokenReplacer(placeholders!, values);
  return message.replace(/\$\w+\$/g, tokenReplacer);
}
/**
 * Token replacer
 * @param placeholders
 * @param values
 */
const createTokenReplacer = (
  placeholders: Placeholders,
  values: PlaceholderValue = []
) => (token: string) => {
  try {
    const stripped = removeDollars(token);
    const offset =
      parseInt(removeDollars(placeholders![stripped].content), 10) - 1;

    return Array.isArray(values) ? values[offset] : values;
  } catch (error) {
    return 'Error';
  }
};
