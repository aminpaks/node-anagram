import { normalizeString } from './string';

describe('normalizeString()', () => {
  it('should return the same result if there is no accents', () => {
    const str = normalizeString('simple english');
    expect(str).toBe('simple english');
  });

  it('should remove the accents', () => {
    const str = normalizeString('ŕprono');
    expect(str).toBe('rprono');
  });
});
