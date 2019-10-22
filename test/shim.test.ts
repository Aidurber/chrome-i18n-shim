import { getMessageShim } from '../src';
import * as simpleFixture from './__fixtures__/simple.json';
import * as placeholderFixture from './__fixtures__/placeholder.json';
import { Tokens } from '../src/types';
describe(getMessageShim.name, () => {
  it('should return null when key cannot be found', () => {
    const result = getMessageShim(simpleFixture as Tokens, 'DEFINITLYNOTEXIST');
    expect(result).toEqual(null);
  });
  describe('Simple', () => {
    it.each([['topics', 'Topics'], ['noTopics', 'No topics']])(
      '%s should return %s',
      (key, expected) => {
        const result = getMessageShim(simpleFixture as Tokens, key);
        expect(result).toEqual(expected);
      }
    );
  });
  describe('With placeholder', () => {
    it('should handle single tokens', () => {
      const result = getMessageShim(
        placeholderFixture,
        'singleTokenMsg',
        'message'
      );
      expect(result).toEqual('I am a token with a message');
    });
    it('should handle multiple tokens', () => {
      const result = getMessageShim(placeholderFixture, 'greetingName', [
        'Hello',
        'Andrew',
      ]);
      expect(result).toEqual('Hello, Andrew');
    });
  });
});
