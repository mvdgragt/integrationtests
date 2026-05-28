import { buyBook } from "..//..//bookstore.js";
import {describe, test, expect} from '@jest/globals'

describe("Book shop integration test", () => {
   test("BuyBook returns a valid book object for a valid title", async () => {
    const buy = await buyBook('Dune');
  
    expect(buy).toEqual(expect.objectContaining({
      title: 'Dune',
      price: expect.any(Number),
      reservationCode: expect.any(Number)
    }));
    expect(Number.isInteger(buy.reservationCode)).toBe(true);
    expect(buy.reservationCode).toBeGreaterThan(0);
  });
});