const { orderDrink } = require("../../src/coffeshop.js");

describe("orderDrink integration test", () => {
  test("should complete full order flow", () => {
    const result = orderDrink("latte");

    expect(result).toBe(true);
  });
});
