import { describe, it, expect, vi } from "vitest";
import { buyBook } from "../../bookstore.js";

describe("Bookstore - Integration Test", () => {
  it("should successfully buy 'dune' and return result with success: true", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const result = buyBook("dune");
    expect(result).toEqual({
      success: true,
      code: expect.any(Number),
    });
    expect(result.success).toBe(true);
    consoleSpy.mockRestore();
  });

  it("should successfully buy 'neuromancer' and return result with success: true", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const result = buyBook("neuromancer");
    expect(result.success).toBe(true);
    expect(typeof result.code).toBe("number");
    consoleSpy.mockRestore();
  });

  it("should successfully buy 'foundation' and return result with success: true", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const result = buyBook("foundation");
    expect(result.success).toBe(true);
    expect(typeof result.code).toBe("number");
    consoleSpy.mockRestore();
  });
});
