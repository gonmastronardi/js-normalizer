const FieldNormalizer = require("./FieldNormalizer");

module.exports = class MemoryNormalizer extends FieldNormalizer {
  constructor() {
    super();
    this.defaultValues = [
      "1GB",
      "2GB",
      "3GB",
      "4GB",
      "6GB",
      "8GB",
      "12GB",
      "16GB",
      "32GB",
      "64GB"
    ];
  }

  normalize(anObject, attribute) {
    let memory = anObject[attribute];
    this.debugField(`Memory: ${memory}`);
    memory = this.getNormalizedMemory(memory);
    this.debugInfo(`Normalized memory: ${memory}`);
    anObject[attribute] = memory;
  }

  //it returns '' if undefined or null
  getNormalizedMemory(aValue) {
    if (!aValue) {
      return "";
    }
    //remove whitespaces
    let memory = aValue.replace(/ /g, "");
    memory = memory.toUpperCase();
    // this.debugInfo(`Actual value: ${memory}`);
    let regExp = /([0-9]+ *(GB)+)/gi;
    let result = regExp.exec(memory);
    if (result != null) {
      memory = result[0];
      if (this.defaultValues.includes(memory)) 
      return parseInt(memory) + " GB";
    }
    return "";
  }
};
