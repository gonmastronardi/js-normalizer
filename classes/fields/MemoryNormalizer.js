import FieldNormalizer from "./FieldNormalizer.js";

export default class MemoryNormalizer extends FieldNormalizer {

  normalize(anObject, attribute) {
    let memory = anObject[attribute];
    this.debugField(`Memory: ${memory}`);
    memory = this.getNormalizedMemory(memory);
    this.debugInfo(`Normalized memory: ${memory}`);
    anObject[attribute] = memory;
  }

  getNormalizedMemory(aValue) {
    if (!aValue) {
      return "" //it returns '' if undefined or null
    }
    let memory = aValue.replace(/ /g, "") //remove whitespaces
    memory = memory.toUpperCase();
    // this.debugInfo(`Actual value: ${memory}`);
    let regExp = /([0-9]+[.,]*[0-9]* *(GB)+)/gi;
    let result = regExp.exec(memory);
    if (result != null) {
      memory = result[0];
      return parseInt(memory) + " GB";
    }
    return "";
  }
};
