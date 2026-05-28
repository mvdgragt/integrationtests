import { findBook, reserveStock, confirmPurchase } from '..//../bookstore.js';
import {expect, test} from '@jest/globals'

describe("Book shop unit test", () => {
  test("Find a valid book with valid title",  () => {
    const book = findBook('Dune')
    expect(book).toEqual({title: 'Dune', price: 45})
})

  test("If unknown title is provided, it should return undefined", () => {
    const book = findBook('Unknown Book')
    expect(book).toBeUndefined()
})

  test("Reserve stock for a valid book", () => {
    const book = findBook('Dune');
    const reservationCode = reserveStock(book);
    expect(reservationCode).toBeGreaterThan(0);
  });

  test("Falsy reservation code", () => {
    expect(() => confirmPurchase(null, 89)).toThrow("Invalid reservation"); 
  });
});
