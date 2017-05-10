const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(_.indexOf(arr, 'a')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(_.indexOf(arr, 'e')).toBe(4);
  });

  it('returns -1 for a missing value', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    expect(_.indexOf(arr, 'z')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['a', 'b', 'a', 'b', 'e'];
    expect(_.indexOf(arr, 'b')).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const arr = ['a', 'b', 'a', 'b', 'e'];
    expect(_.indexOf(arr, 'b', 2)).toBe(3);
  });

});