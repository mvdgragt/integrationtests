'use strict';

const {
  createDrink,
  prepareOrder
} = require('../../coffeeshop');

describe('Coffee shop unit tests', () => {

  test('createDrink returns correct type and price for latte', () => {
    const result = createDrink('latte');

    expect(result).toEqual({
      type: 'latte',
      price: 45
    });
  });

  test('createDrink returns undefined price for unknown drink', () => {
    const result = createDrink('tea');

    expect(result).toEqual({
      type: 'tea',
      price: undefined
    });
  });

  test('prepareOrder returns a number between 0 and 999', () => {
    const ticket = prepareOrder({ type: 'espresso' });

    expect(typeof ticket).toBe('number');
    expect(ticket).toBeGreaterThanOrEqual(0);
    expect(ticket).toBeLessThan(1000);
  });

});