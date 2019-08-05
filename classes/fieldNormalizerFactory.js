const MonetaryAmountNormalizer = require("./fields/MonetaryAmountNormalizer");
const MemoryNormalizer = require("./fields/MemoryNormalizer");
const BrandNormalizer = require("./fields/BrandNormalizer");
const ScreenSizeNormalizer = require("./fields/ScreenSizeNormalizer");
const MegapixelNormalizer = require("./fields/MegapixelNormalizer");
const BatteryNormalizer = require("./fields/BatteryNormalizer");
const TitleNormalizer = require("./fields/TitleNormalizer");
const OSNormalizer = require('./fields/OSNormalizer');

module.exports = {
  monetaryAmountNormalizer: new MonetaryAmountNormalizer(),
  memoryNormalizer: new MemoryNormalizer(),
  brandNormalizer: new BrandNormalizer(),
  screenSizeNormalizer: new ScreenSizeNormalizer(),
  megapixelNormalizer: new MegapixelNormalizer(),
  batteryNormalizer: new BatteryNormalizer(),
  titleNormalizer: new TitleNormalizer(),
  osNormalizer: new OSNormalizer()
};
