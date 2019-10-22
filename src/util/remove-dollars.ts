/**
 * Remove all dollar symbols from a string
 * @param str - Subject
 */
export function removeDollars(str: string): string {
  return str.replace(/\$/g, '');
}
