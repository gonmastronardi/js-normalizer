const FieldNormalizer = require("./FieldNormalizer");

module.exports = class MemoryNormalizer extends FieldNormalizer {
  constructor() {
    super();
    this.values = ["3GB", "4GB", "6GB", "8GB", "16GB"];
  }

  normalize(anObject, attribute) {
    let memory = anObject[attribute];

    this.debugField(`Memory: ${memory}`);

    memory = this.getNormalizedMemory(memory);

    this.debugField(`Normalized memory: ${memory}`);

    anObject[attribute] = memory;
  }

  getNormalizedMemory(aValue) {
    let memory = aValue.replace(/ /g, "");
    // this.debugInfo(`Actual value: ${memory}`);
    for (var value of this.values) {
      if (memory.includes(value)) return parseInt(value) + " GB";
    }
    return aValue;
  }
};
