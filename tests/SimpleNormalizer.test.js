const SimpleNormalizer = require("../classes/SimpleNormalizer");

const simpleNormalizer = new SimpleNormalizer();

describe("getNormalizedPrice", () => {
  it("should normalize: $15000. Expected: $ 15.000,00", () => {
    let result = simpleNormalizer.getNormalizedPrice("$15000");
    expect(result).toMatch('15.000,00');
  });
  it("should normalize: $15,000. Expected: $ 15.000,00", () => {
    let result = simpleNormalizer.getNormalizedPrice("$15,000");
    expect(result).toMatch(/15.000,00/);
  });
  it("should normalize: $15.000. Expected: $ 15.000,00", () => {
    let result = simpleNormalizer.getNormalizedPrice("$15.000");
    expect(result).toMatch(/15.000,00/);
  });
  it("should normalize: $15000,555. Expected: $ 15.000,55", () => {
    let result = simpleNormalizer.getNormalizedPrice("$15000,555");
    expect(result).toMatch(/15.000,55/);
  });
  it("should normalize: $15.000,555. Expected: $ 15.000,55", () => {
    let result = simpleNormalizer.getNormalizedPrice("$15.000,555");
    expect(result).toMatch(/15.000,55/);
  });
  it("should normalize: $15,000.555. Expected: $ 15.000,55", () => {
    let result = simpleNormalizer.getNormalizedPrice("$15,000.555");
    expect(result).toMatch(/15.000,55/);
  });
  it("should normalize: $1555. Expected: $ 1.555,00", () => {
    let result = simpleNormalizer.getNormalizedPrice("$1555");
    expect(result).toMatch(/1.555,00/);
  });
  it("should normalize: $100.50. Expected: $ 100,50", () => {
    let result = simpleNormalizer.getNormalizedPrice("$100.50");
    expect(result).toMatch(/100,50/);
  });
});
