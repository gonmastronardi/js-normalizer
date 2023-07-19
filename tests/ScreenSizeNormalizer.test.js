import ScreenSizeNormalizer from "../classes/fields/ScreenSizeNormalizer";
const screenSizeNormalizer = new ScreenSizeNormalizer();

describe("normalizeScreenSize", () => {
  it('should normalize: 5 " . Expected: 5 "', () => {
    let result = screenSizeNormalizer.normalizeScreenSize('5 "');
    expect(result).toMatch('5 "');
  });
  it('should normalize: 5 " . Expected: 5 "', () => {
    let result = screenSizeNormalizer.normalizeScreenSize('5 "');
    expect(result).toMatch('5 "');
  });
  it('should normalize: 5,7 " . Expected: 5.7 "', () => {
    let result = screenSizeNormalizer.normalizeScreenSize('5,7 "');
    expect(result).toMatch('5.7 "');
  });
  it('should normalize: 5.7 " . Expected: 5.7 "', () => {
    let result = screenSizeNormalizer.normalizeScreenSize('5.7 "');
    expect(result).toBe('5.7 "');
  });
  it('should normalize: 5.7 in. Expected: 5.7 "', () => {
    let result = screenSizeNormalizer.normalizeScreenSize("5.7 in");
    expect(result).toBe('5.7 "');
  });
  it('should normalize: "". Expected: "" ', () => {
    let result = screenSizeNormalizer.normalizeScreenSize("");
    expect(result).toBe("");
  });
  it('should normalize: 5,7 in. Expected: 5.7 "', () => {
    let result = screenSizeNormalizer.normalizeScreenSize("5,7 in");
    expect(result).toBe('5.7 "');
  });
  it('should normalize: 6.2" pulgadas. Expected: 6.2 "', () => {
    let result = screenSizeNormalizer.normalizeScreenSize('6.2" pulgadas');
    expect(result).toBe('6.2 "');
  });
  it("should normalize: undefined. Expected: ''", () => {
    let result = screenSizeNormalizer.normalizeScreenSize(undefined);
    expect(result).toBe("");
  });
  it("should normalize: null. Expected: ''", () => {
    let result = screenSizeNormalizer.normalizeScreenSize(null);
    expect(result).toBe("");
  });
});
