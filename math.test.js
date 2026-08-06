// math.test.ts
const { add } = require("./math");

describe("add", () => {
  it("sums two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
