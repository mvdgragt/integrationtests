import { describe, test, expect } from "vitest";
import { createDrink, orderDrink, prepareOrder } from "./coffeeshop";

describe("Coffee Shop Unit Tests", () => {
  test("createDrink returns correct type and price", () => {
    const drink = createDrink("latte");

    expect(drink).toEqual({ type: "latte", price: 45 });
  });

  test("createDrink returns undefined price for unknown type", () => {
    const drink = createDrink("americano");

    expect(drink).toEqual({ type: "americano", price: undefined });
  });

  test("prepareOrder returns a numeric order id", () => {
    const id = prepareOrder({ type: "cappuccino", price: 50 });

    expect(typeof id).toBe("number");
    expect(Number.isInteger(id)).toBe(true);
    expect(id).toBeGreaterThanOrEqual(0);
    expect(id).toBeLessThan(1000);
  });

  test("orderDrink returns true for a valid drink", () => {
    const result = orderDrink("latte");

    expect(result).toBe(true);
  });
});
