import FieldNormalizer from "./FieldNormalizer.js";

export default class ProcessorNormalizer extends FieldNormalizer {
  constructor() {
    super();
    //words to remove from title description
    this.unusefulWords = ["Procesador", "Processor"];
  }

  normalize(anObject, attribute) {
    let processor = anObject[attribute];
    this.debugField(`Processor: ${processor}`);
    processor = this.getNormalizedProcessor(processor);
    this.debugInfo(`Normalized processor: ${processor}`);
    anObject[attribute] = processor;
  }

  //.
  getNormalizedProcessor(aValue) {
    if (!aValue) {
      return "";
    }
    let original = aValue;
    let cores = this.hasAnyCores(original);
    if (cores) return cores;
    return this.removeExtraData(original);
  }

  hasAnyCores(aValue) {
    //checks if processor is for example 'octa core', 'single-core', etc..
    let regExp = /(([\w])*([ ]|[-])*([\w])*)(core)+/gi;
    let partialExpression = regExp.exec(aValue);
    //caso afirmativo guardar en string
    if (partialExpression != null) {
      let cores = partialExpression[0];
      return cores;
    }
    return false;
  }

  removeExtraData(aValue) {
    //remove unuseful words if necessary, as 'Processor' or any other written in the array in constructor
    for (var k in this.unusefulWords) {
      if (aValue.toUpperCase().includes(this.unusefulWords[k].toUpperCase())) {
        let regExp = new RegExp(this.unusefulWords[k], "gi");
        aValue = aValue.replace(regExp, "");
      }
    }

    let regExp = /((([0-9]+([.])*[0-9]*) *(ghz))|(([0-9]+) *(mhz)))/gi;
    let partialExpression = regExp.exec(aValue);
    while (partialExpression != null) {
      let speedProcessor = partialExpression[0];
      aValue = aValue.replace(speedProcessor, "");
      partialExpression = regExp.exec(aValue);
    }

    return aValue;
  }
};
