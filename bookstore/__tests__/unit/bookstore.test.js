const { findBook, reserveStock, confirmPurchase } = require("../../src/bookstore");

// ─── Unit Tests ────────────────────────────────────────────────────────────────

describe("findBook", () => {
  test("returns the correct title and price for a valid title", () => {
    const book = findBook("dune");
    expect(book).toEqual({ title: "dune", price: 89 });
  });

  test("throws an error for a title not in the catalogue", () => {
    expect(() => findBook("unknown book")).toThrow("Book not found: unknown book");
  });
});

describe("reserveStock", () => {
  test("returns a reservation code that is a number between 1000 and 9999", () => {
    const book = { title: "neuromancer", price: 79 };
    const code = reserveStock(book);

    // We can assert the type and the range — we cannot assert the exact value
    // because it is randomly generated
    expect(typeof code).toBe("number");
    expect(code).toBeGreaterThanOrEqual(1000);
    expect(code).toBeLessThanOrEqual(9999);
  });
});

describe("confirmPurchase", () => {
  test("throws 'Invalid reservation' when called with a falsy reservation code", () => {
    expect(() => confirmPurchase(0, 89)).toThrow("Invalid reservation");
    expect(() => confirmPurchase(null, 89)).toThrow("Invalid reservation");
    expect(() => confirmPurchase(undefined, 89)).toThrow("Invalid reservation");
  });

  test("returns { success: true, code } for a valid reservation code", () => {
    const result = confirmPurchase(1234, 89);
    expect(result).toEqual({ success: true, code: 1234 });
  });
});
