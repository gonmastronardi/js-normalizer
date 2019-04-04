const FieldNormalizer = require("./FieldNormalizer");

module.exports = class MemoryNormalizer extends FieldNormalizer {
  constructor() {
    super();
    this.values = [
      "1 GB",
      "2 GB",
      "3GB",
      "4GB",
      "6GB",
      "8GB",
      "16GB",
      "32GB",
      "64GB"
    ];
  }

  normalize(anObject, attribute) {
    let memory = anObject[attribute];
    this.debugField(`Memory: ${memory}`);
    memory = this.getNormalizedMemory(memory);
    this.debugField(`Normalized memory: ${memory}`);
    anObject[attribute] = memory;
  }

  //it returns '' if undefined or null
  getNormalizedMemory(aValue) {
    if (aValue === undefined || aValue === null) {
      return "";
    }
    let memory = aValue.replace(/ /g, "");
    memory = memory.toUpperCase();
    // this.debugInfo(`Actual value: ${memory}`);
    for (var value of this.values) {
      if (memory.includes(value)) return parseInt(value) + " GB";
    }
    return "";
  }
};
