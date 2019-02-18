import { findAnagram } from './find-anagram';

describe('findAnagram()', () => {
  it('should return an empty array if no anagram found', () => {
    const result = findAnagram('cat', ['test', 'close']);
    expect(result).toEqual([]);
  });

  it('should return the anagram', () => {
    const result = findAnagram('cat', ['act']);
    expect(result).toEqual(['act']);
  });
});
