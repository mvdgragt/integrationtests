const { orderPizza } = require("./pizzashop");

describe("Pizza Shop Integration Test", () => {
  test("should successfully complete a full pizza order", () => {
    const result = orderPizza("margherita");
    expect(result).toBe(true);
  });
});
