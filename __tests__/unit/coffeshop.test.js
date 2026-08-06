const { createDrink, prepareOrder } = require("../../src/coffeshop.js");

test("createDrink known type", () => {
  expect(createDrink("latte")).toEqual({
    type: "latte",
    price: 45,
  });
});

test("createDrink unknown type", () => {
  expect(createDrink("mocha")).toEqual({
    type: "mocha",
    price: undefined,
  });
});

test("prepareOrder returns valid ticket number", () => {
  const result = prepareOrder({ type: "latte" });

  expect(typeof result).toBe("number");
  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThan(1000);
});
