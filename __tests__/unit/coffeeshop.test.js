const { createDrink, processPayment } = require('../../src/coffeeshop');

test('createDrink returns correct type and price for latte', () => {
  const drink = createDrink('latte');
  expect(drink.type).toBe('latte');
  expect(drink.price).toBe(45);
});

test('createDrink returns correct price for espresso', () => {
  const drink = createDrink('espresso');
  expect(drink.price).toBe(30);
});

test('processPayment throws error if no ticket number', () => {
  expect(() => processPayment(null, 45)).toThrow('No ticket number provided');
});

test('processPayment returns true on success', () => {
  expect(processPayment(123, 45)).toBe(true);
});