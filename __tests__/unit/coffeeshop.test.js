import { describe, test, expect } from "vitest";
import { createDrink, orderDrink, prepareDrink } from "../../src/coffeeshop";

test("Should returns correct type and price", () => {
  const drink = createDrink("latte");
  expect(drink).toEqual({ type: "latte", price: 45 });
  console.log(drink);
});

test("Should return undefined price for unknown drink", () => {
  const drink = createDrink("mocha");
  expect(drink.price).toBeUndefined();
  console.log(drink);
});

test("Should return a ticket number between 0 and 999", () => {
  const drink = createDrink("cappuccino");
  const ticketNumber = prepareDrink(drink);
  expect(ticketNumber).toBeGreaterThanOrEqual(0);
  expect(ticketNumber).toBeLessThan(1000);
  console.log(`Generated ticket number: ${ticketNumber}`);
});
