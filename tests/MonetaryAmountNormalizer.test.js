const MonetaryAmountNormalizer = require("../classes/fields/MonetaryAmountNormalizer");

const monetaryAmountNormalizer = new MonetaryAmountNormalizer();

describe("getNormalizedAmount", () => {
  it("should normalize: $15000. Expected: $ 15.000,00", () => {
    let result = monetaryAmountNormalizer.getNormalizedAmount("$15000");
    expect(result).toMatch("15.000,00");
  });
  it("should normalize: $15,000. Expected: $ 15.000,00", () => {
    let result = monetaryAmountNormalizer.getNormalizedAmount("$15,000");
    expect(result).toMatch(/15.000,00/);
  });
  it("should normalize: $15.000. Expected: $ 15.000,00", () => {
    let result = monetaryAmountNormalizer.getNormalizedAmount("$15.000");
    expect(result).toMatch(/15.000,00/);
  });
  it("should normalize: $15000,555. Expected: $ 15.000,55", () => {
    let result = monetaryAmountNormalizer.getNormalizedAmount("$15000,555");
    expect(result).toMatch(/15.000,55/);
  });
  it("should normalize: $15.000,555. Expected: $ 15.000,55", () => {
    let result = monetaryAmountNormalizer.getNormalizedAmount("$15.000,555");
    expect(result).toMatch(/15.000,55/);
  });
  it("should normalize: $15,000.555. Expected: $ 15.000,55", () => {
    let result = monetaryAmountNormalizer.getNormalizedAmount("$15,000.555");
    expect(result).toMatch(/15.000,55/);
  });
  it("should normalize: $1555. Expected: $ 1.555,00", () => {
    let result = monetaryAmountNormalizer.getNormalizedAmount("$1555");
    expect(result).toMatch(/1.555,00/);
  });
  it("should normalize: $100.50. Expected: $ 100,50", () => {
    let result = monetaryAmountNormalizer.getNormalizedAmount("$100.50");
    expect(result).toMatch(/100,50/);
  });
  //whitespace
  it("should normalize: ' '. Expected: $ 0,00 ", () => {
    let result = monetaryAmountNormalizer.getNormalizedAmount(" ");
    expect(result).toMatch(/0,00/);
  });
  it("should normalize: null. Expected: $ 0,00", () => {
    let result = monetaryAmountNormalizer.getNormalizedAmount(null);
    expect(result).toMatch(/0,00/);
  });
  it("should normalize: undefined. Expected: $ 0,00", () => {
    result = monetaryAmountNormalizer.getNormalizedAmount(undefined);
    expect(result).toMatch(/0,00/);
  });
});
