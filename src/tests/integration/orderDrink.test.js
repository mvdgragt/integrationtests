'use strict';

const { orderDrink } = require('../../coffeeshop');

describe('Coffee shop integration test', () => {

  test('orderDrink returns true for latte', () => {
    const result = orderDrink('latte');

    expect(result).toBe(true);
  });

});