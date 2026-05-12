import { describe, test, expect } from "vitest";
import { findBook, reserveStock, confirmPurchase } from "./bookstore";

describe("Books Store Unit Tests", () => {
  test("findBook returns a valid title", () => {
    const book = findBook("dune");

    expect(book).toEqual({ type: "dune", price: 89 });
  });

  test("findBook returns undefined title not in the catalogue", () => {
    const book = findBook("harry potter");

    expect(book).toEqual({ type: "harry potter", price: undefined });
  });

  test("confirmPurchase returns a numeric order id", () => {
    const reservationCode = reserveStock({ type: "dune", price: 89 });
    const id = confirmPurchase(reservationCode, 89);

    expect(typeof id.code).toBe("number");
    expect(Number.isInteger(id.code)).toBe(true);
    expect(id.code).toBeGreaterThanOrEqual(1000);
    expect(id.code).toBeLessThan(10000);
  });

  test("reserveStock returns a numeric reservation code for a valid book", () => {
    const result = reserveStock({ type: "dune", price: 89 });

    expect(typeof result).toBe("number");
  });
});
