const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [2, 3, 4, 5, 6, 7, 8, 9];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([3, 5, 7, 9]);
  });

  it('filters an object to only numeric values', () => {
    const car = {
      make: 'Chevrolet',
      model: 'Volt',
      year: 2017,
      mileage: 65,
      doors: 4,
      serialNumber: '1N453252OKMKNNSDJJ991'
    };
    expect(_.filter(car, (value) => !isNaN(value))).toEqual([2017, 65, 4]);
  });
});