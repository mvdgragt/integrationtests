'use strict';

const {
  findBook,
  reserveStock,
  confirmPurchase
} = require('../../bookstore');

describe('Bookstore unit tests', () => {

  test('findBook returns correct book and price for valid title', () => {
    const result = findBook('dune');

    expect(result).toEqual({
      title: 'dune',
      price: 89
    });
  });

  test('findBook returns undefined price for unknown book', () => {
    const result = findBook('harrypotter');

    expect(result).toEqual({
      title: 'harrypotter',
      price: undefined
    });
  });

  test('reserveStock returns a number between 1000 and 9999', () => {
    const code = reserveStock({ title: 'dune' });

    expect(typeof code).toBe('number');
    expect(code).toBeGreaterThanOrEqual(1000);
    expect(code).toBeLessThanOrEqual(9999);
  });

  test('confirmPurchase throws if reservationCode is falsy', () => {
    expect(() => {
      confirmPurchase(0, 89);
    }).toThrow('Invalid reservation');

    expect(() => {
      confirmPurchase(undefined, 89);
    }).toThrow('Invalid reservation');
  });

});
