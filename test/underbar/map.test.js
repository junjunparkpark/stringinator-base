const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [2, 3, 4, 5, 6];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([4, 9, 16, 25, 36]);
  });
});