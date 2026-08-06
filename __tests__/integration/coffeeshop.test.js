const { orderDrink } = require('../../src/coffeeshop');

test('orderDrink returns true for valid drink', () => {
  expect(orderDrink('latte')).toBe(true);
});

test('orderDrink returns true for cappuccino', () => {
  expect(orderDrink('cappuccino')).toBe(true);
});