const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(5)).toBe(5);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity(['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
  });

  it('returns the same object if given an object', () => {
    val = {
      'hello': 'world'
    };
    expect(_.identity(val)).toEqual(val);
  });
});