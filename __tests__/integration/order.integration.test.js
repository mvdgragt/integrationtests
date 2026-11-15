import { describe, test, expect } from "vitest";
import { orderDrink } from "../../src/coffeeshop";

describe("Coffee Shop Integration Test", () => {
  test("Should successfully complete full order flow of a latte order and return true", () => {
    const result = orderDrink("espresso");
    expect(result).toBe(true);
  });
});
