import { formatNumberWithCommas } from "../numberUtils";

describe("formatNumberWithCommas", () => {
  it("should format a number with commas", () => {
    const number = 123456789;
    const formattedNumber = formatNumberWithCommas(number);
    expect(formattedNumber).toBe("123,456,789");
  });

  it("should return the same number if it is less than 1000", () => {
    const number = 999;
    const formattedNumber = formatNumberWithCommas(number);
    expect(formattedNumber).toBe("999");
  });

  it("should handle negative numbers", () => {
    const number = -123456789;
    const formattedNumber = formatNumberWithCommas(number);
    expect(formattedNumber).toBe("-123,456,789");
  });

  it("should handle decimal numbers", () => {
    const number = 1234.5678;
    const formattedNumber = formatNumberWithCommas(number);
    expect(formattedNumber).toBe("1,234.5678");
  });
});
