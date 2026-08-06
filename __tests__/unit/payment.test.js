const { processPayment } = require("../../src/payment.js");

test("throws error if no ticket number", () => {
  expect(() => processPayment(null, 45)).toThrow("No ticket number provided");
});

test("returns true for valid payment", () => {
  expect(processPayment(123, 45)).toBe(true);
});
