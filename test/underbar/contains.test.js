const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 1)).toBe(true)
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 10)).toBe(false)
  });

  it('returns true if the target value is among the values of an object', () => {
    const cars = {
      'car1': 'Chevrolet',
      'car2': 'Ford',
      'car3': 'Toyota',
      'car4': 'Hyundai'
    };
    expect(_.contains(cars, 'Toyota')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const cars = {
      'car1': 'Chevrolet',
      'car2': 'Ford',
      'car3': 'Toyota',
      'car4': 'Hyundai'
    };
    expect(_.contains(cars, 'Volkswagen')).toBe(false);
  });

});