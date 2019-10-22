import { textFormatter } from './text-formatter';
import { placeholderFormatter } from './placeholder-formatter';
import { I18nPayload } from '../types';
/**
 * Get the formatter depending on the match type
 * @param match I18nPayload - Matched payloed
 */
export const getFormatter = (match: I18nPayload) => {
  if (
    match.hasOwnProperty('placeholders') &&
    typeof match.placeholders !== 'undefined' &&
    Object.keys(match.placeholders).length > 0
  ) {
    return placeholderFormatter;
  } else {
    return textFormatter;
  }
};
