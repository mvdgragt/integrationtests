import { describe, test, expect } from "vitest";
import { findBook, reservStock, confirmPurchase } from "../../src/bookstore";

describe("findBook with a valid title", () => {
  test("Should return the correct book details", () => {
    const result = findBook("dune");
    expect(result).toEqual({ title: "dune", price: 89 });
  });
});

describe("findBook with a title not in the catalogue", () => {
  test("Return title and price undefined", () => {
    const books = findBook();
    expect(books).toEqual({ title: undefined, price: undefined });
  });
});

describe("reservStock, what properties of the return value can you assert?", () => {
  test("Should return a number from 1000 - 9999", () => {
    const reservationCode = reservStock({ title: "dune", price: 89 });
    expect(typeof reservationCode).toBe("number");
    expect(reservationCode).toBeGreaterThanOrEqual(1000);
    expect(reservationCode).toBeLessThanOrEqual(9999);
  });
});

describe("confirmPurchase with a valid reservation code", () => {
  test("Should return success true and the reservation code", () => {
    const result = confirmPurchase(1234, 89);
    expect(result).toEqual({ success: true, code: 1234 });
  });
});
