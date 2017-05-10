const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const cars = [
      { make: 'Chevrolet', model: 'Volt', year: 2017 },
      { make: 'Toyota', model: 'Camry', year: 2016 },
      { make: 'Ford', model: 'Focus', year: 2017 }
    ];
    const result = _.pluck(cars, 'make');
    expect(result).toEqual(['Chevrolet', 'Toyota', 'Ford'])
  });

});