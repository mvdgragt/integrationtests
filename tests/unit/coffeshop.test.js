import { describe, it, expect, vi } from "vitest";
import { createDrink, prepareOrder, processPayment } from "../../coffeshop.js";

describe("Coffee Shop - Unit Tests", () => {
  describe("createDrink", () => {
    it("should return a drink object with correct type and price for 'latte'", () => {
      const result = createDrink("latte");
      expect(result).toEqual({ type: "latte", price: 45 });
    });

    it("should return a drink object with correct type and price for 'espresso'", () => {
      const result = createDrink("espresso");
      expect(result).toEqual({ type: "espresso", price: 30 });
    });

    it("should return a drink object with correct type and price for 'cappuccino'", () => {
      const result = createDrink("cappuccino");
      expect(result).toEqual({ type: "cappuccino", price: 50 });
    });

    it("should return a drink object with undefined price for unknown type", () => {
      const result = createDrink("unknown");
      expect(result).toEqual({ type: "unknown", price: undefined });
    });
  });

  describe("prepareOrder", () => {
    it("should return a ticket number between 0 and 999", () => {
      const drink = { type: "latte", price: 45 };
      const ticketNumber = prepareOrder(drink);
      expect(typeof ticketNumber).toBe("number");
      expect(ticketNumber).toBeGreaterThanOrEqual(0);
      expect(ticketNumber).toBeLessThan(1000);
    });

    it("should log a message with the drink type", () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      const drink = { type: "espresso", price: 30 };
      prepareOrder(drink);
      expect(consoleSpy).toHaveBeenCalledWith("Preparing espresso...");
      consoleSpy.mockRestore();
    });
  });

  describe("processPayment", () => {
    it("should return true when payment is processed successfully", () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      const result = processPayment(123, 45);
      expect(result).toBe(true);
      consoleSpy.mockRestore();
    });

    it("should throw 'No ticket number provided' when ticketNumber is falsy", () => {
      expect(() => processPayment(null, 45)).toThrow("No ticket number provided");
      expect(() => processPayment(undefined, 45)).toThrow("No ticket number provided");
      expect(() => processPayment(0, 45)).toThrow("No ticket number provided");
    });

    it("should log payment information", () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      processPayment(456, 30);
      expect(consoleSpy).toHaveBeenCalledWith("Payment of 30 received for ticket #456");
      consoleSpy.mockRestore();
    });
  });
});
