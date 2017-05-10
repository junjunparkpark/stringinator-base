const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8]);
  });

  it('rejects null values from an object', () => {
    const cars = {
      make: 'Chevrolet',
      model: 'Volt',
      serialNumber: null,
      year: 2018,
      mileage: null,
      color: 'black'
    };
    const result = _.reject(cars, (value) => value === null);
    expect(result).toEqual(['Chevrolet', 'Volt', 2018, 'black']);
  });
});