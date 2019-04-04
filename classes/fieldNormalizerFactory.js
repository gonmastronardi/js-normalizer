const MonetaryAmountNormalizer = require("./fields/MonetaryAmountNormalizer");
const MemoryNormalizer = require("./fields/MemoryNormalizer");

module.exports = {
  monetaryAmountNormalizer: new MonetaryAmountNormalizer(),
  memoryNormalizer: new MemoryNormalizer()
};
