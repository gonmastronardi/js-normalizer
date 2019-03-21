const PriceNormalizer = require('./fields/PriceNormalizer')
const MemoryNormalizer = require('./fields/MemoryNormalizer')

module.exports = {
 priceNormalizer : new PriceNormalizer(),
 memoryNormalizer : new MemoryNormalizer()
}