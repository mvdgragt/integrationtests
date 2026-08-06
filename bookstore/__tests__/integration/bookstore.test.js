const { buyBook } = require("../../src/bookstore");

// ─── Integration Test ──────────────────────────────────────────────────────────

describe("buyBook (integration)", () => {
  test("buyBook('dune') resolves with success: true", () => {
    const result = buyBook("dune");

    // .toEqual is used here (not .toBe) because confirmPurchase returns an object.
    // .toBe checks reference equality — two separate object literals are never ===
    // to each other even if they have the same shape. .toEqual does a deep comparison
    // of values, which is what we need when asserting on plain objects.
    expect(result.success).toBe(true);

    // We can also assert the full shape with toEqual, leaving the code dynamic:
    expect(result).toEqual({ success: true, code: result.code });

    // And the code must still be a valid reservation code
    expect(result.code).toBeGreaterThanOrEqual(1000);
    expect(result.code).toBeLessThanOrEqual(9999);
  });
});
