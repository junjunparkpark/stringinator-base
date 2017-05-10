const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [1, 1, 2, 1, 4, 5, 2, 6, 1, 2];
    expect(_.uniq(nums)).toEqual([1, 2, 4, 5, 6]);
  });
});