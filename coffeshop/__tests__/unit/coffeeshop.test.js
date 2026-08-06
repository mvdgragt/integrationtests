import { describe, test, expect } from "vitest";
import { createDrink, prepareOrder, processPayment } from "../../src/coffeeshop.js";

// Unit tests for the coffeeshop module
describe("coffeeshop unit tests", () => {

  // createDrink with a known type — check both type and price
  test("createDrink returns correct type and price for 'latte'", () => {
    const drink = createDrink("latte");
    expect(drink.type).toBe("latte");   // type should match input
    expect(drink.price).toBe(45);       // latte costs 45
  });

  // createDrink with an unknown type — price should be undefined (not on the menu)
  test("createDrink returns undefined price for an unknown type", () => {
    const drink = createDrink("mocha");
    expect(drink.type).toBe("mocha");       // type still reflects the input
    expect(drink.price).toBeUndefined();    // no menu entry means price is undefined
  });

  // prepareOrder — ticket number must be an integer in the range 0–999
  test("prepareOrder returns a ticket number between 0 and 999", () => {
    const drink = createDrink("espresso");
    const ticket = prepareOrder(drink);
    expect(typeof ticket).toBe("number");           // must be a number
    expect(Number.isInteger(ticket)).toBe(true);    // must be a whole number
    expect(ticket).toBeGreaterThanOrEqual(0);       // lower bound
    expect(ticket).toBeLessThanOrEqual(999);        // upper bound
  });

  // processPayment — throws when ticketNumber is falsy
  test("processPayment throws 'No ticket number provided' when ticketNumber is falsy", () => {
    expect(() => processPayment(0, 45)).toThrow("No ticket number provided");
  });

  // processPayment — returns true for a valid ticket
  test("processPayment returns true for a valid ticket", () => {
    const result = processPayment(42, 45);
    expect(result).toBe(true);
  });

});
