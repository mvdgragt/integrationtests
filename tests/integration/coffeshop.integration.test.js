import { describe, it, expect, vi } from "vitest";
import { orderDrink } from "../../coffeshop.js";

describe("Coffee Shop - Integration Test", () => {
  it("should successfully order a latte and return true", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const result = orderDrink("latte");
    expect(result).toBe(true);
    consoleSpy.mockRestore();
  });

  it("should successfully order an espresso and return true", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const result = orderDrink("espresso");
    expect(result).toBe(true);
    consoleSpy.mockRestore();
  });

  it("should successfully order a cappuccino and return true", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const result = orderDrink("cappuccino");
    expect(result).toBe(true);
    consoleSpy.mockRestore();
  });
});
