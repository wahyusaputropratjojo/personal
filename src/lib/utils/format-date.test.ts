import { describe, it, expect } from "vitest";
import { formatDate } from "./format-date";

describe("formatDate", () => {
  it("formats a date and time correctly", () => {
    const date = new Date(2024, 2, 4, 15, 30);

    const result = formatDate(date);

    expect(result).toContain("15:30");
    expect(result).toContain("Mar 4, 2024");
    expect(result).toBe("15:30 · Mar 4, 2024");
  });
});
