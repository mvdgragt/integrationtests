import { describe, test, expect } from "vitest";
import { orderDrink } from "../../src/coffeeshop.js";

// Integration test: verifies the full coffee order flow end-to-end.
//
// What makes this different from the orderPizza unit test in the tutorial:
// The jestlesson unit tests check individual functions in isolation — e.g.
// "does createPizza return the right shape?" or "does sendOrder return a number?".
// This integration test does NOT mock anything. It runs createDrink → prepareOrder →
// processPayment as a real chain and asserts that the composed result is correct.
// We are not verifying the behaviour of each step; we are verifying that all three
// steps work together and that money can actually be taken at the end of a real order.
describe("Coffee Shop Integration Test", () => {

  // Full order flow for a latte should complete and confirm payment
  test("orderDrink('latte') completes the full flow and returns true", () => {
    const result = orderDrink("latte"); // create → prepare → pay
    expect(result).toBe(true);         // payment must succeed
  });

});
