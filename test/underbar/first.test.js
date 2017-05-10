const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['dogs', 'cats', 'chickens', 'cows', 'pigs'])).toEqual('dogs');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['dogs', 'cats', 'chickens', 'cows', 'pigs'], 2)).toEqual(['dogs', 'cats']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['dogs', 'cats', 'chickens', 'cows', 'pigs'], 10)).toEqual(['dogs', 'cats', 'chickens', 'cows', 'pigs']);
  });
});