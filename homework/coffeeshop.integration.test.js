import { orderDrink } from "./coffeeshop";
import { describe, test, expect } from "vitest";

describe("Coffee Shop Integration Test", () => {
  test("should successfully complete a full drink order", () => {
    const result = orderDrink("latte");
    expect(result).toBe(true);
  });
});
