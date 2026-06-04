import { describe, it, expect, vi } from "vitest";
import { findBook, reserveStock, confirmPurchase } from "../../bookstore.js";

describe("Bookstore - Unit Tests", () => {
  describe("findBook", () => {
    it("should return a book object with correct title and price for 'dune'", () => {
      const result = findBook("dune");
      expect(result).toEqual({ title: "dune", price: 89 });
    });

    it("should return a book object with correct title and price for 'neuromancer'", () => {
      const result = findBook("neuromancer");
      expect(result).toEqual({ title: "neuromancer", price: 79 });
    });

    it("should return a book object with correct title and price for 'foundation'", () => {
      const result = findBook("foundation");
      expect(result).toEqual({ title: "foundation", price: 75 });
    });

    it("should return a book object with undefined price for unknown title", () => {
      const result = findBook("unknown");
      expect(result).toEqual({ title: "unknown", price: undefined });
    });
  });

  describe("reserveStock", () => {
    it("should return a reservation code between 1000 and 9999 (inclusive)", () => {
      const book = { title: "dune", price: 89 };
      const reservationCode = reserveStock(book);
      expect(typeof reservationCode).toBe("number");
      expect(reservationCode).toBeGreaterThanOrEqual(1000);
      expect(reservationCode).toBeLessThanOrEqual(9999);
    });

    it("should log a message with the book title", () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      const book = { title: "neuromancer", price: 79 };
      reserveStock(book);
      expect(consoleSpy).toHaveBeenCalledWith("Reserving stock for neuromancer");
      consoleSpy.mockRestore();
    });
  });

  describe("confirmPurchase", () => {
    it("should return an object with success: true and the reservation code", () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      const result = confirmPurchase(5000, 89);
      expect(result).toEqual({ success: true, code: 5000 });
      consoleSpy.mockRestore();
    });

    it("should throw 'Invalid reservation' when reservationCode is falsy", () => {
      expect(() => confirmPurchase(null, 89)).toThrow("Invalid reservation");
      expect(() => confirmPurchase(undefined, 89)).toThrow("Invalid reservation");
      expect(() => confirmPurchase(0, 89)).toThrow("Invalid reservation");
    });

    it("should log purchase confirmation information", () => {
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
      confirmPurchase(5000, 89);
      expect(consoleSpy).toHaveBeenCalledWith("Purchase confirmed. Reservation: 5000, Amount: 89");
      consoleSpy.mockRestore();
    });
  });
});
