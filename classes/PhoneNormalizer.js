const SimpleNormalizer = require("./SimpleNormalizer");

module.exports = class PhoneNormalizer extends SimpleNormalizer {
  normalizeMemoryOf(object) {
    return object.memoriaRam;
  }
};
