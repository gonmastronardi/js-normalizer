const FieldNormalizer = require("./FieldNormalizer");

module.exports = class MemoryNormalizer extends FieldNormalizer {
  
  normalize(anObject) {
    let memory = anObject.memoriaRam;
    memory = this.getNormalizedMemory(memory);
    return memory;
  }

  getNormalizedMemory(aValue){

  }
};
