const FieldNormalizer = require("./FieldNormalizer");

module.exports = class ProcessorNormalizer extends FieldNormalizer {
  constructor() {
    super();
    //words to remove from title description
    this.unusefulWords = ["Procesador", "Processor"];
  }
  normalize(anObject, attribute) {
    let processor = anObject[attribute];
    this.debugField(`Processor: ${processor}`);
    processor = this.getNormalizedProcessor(processor);

    //aca separar procesador de velocidad y ver si puedo devolver velocidad para agegarlo a otro campo

    this.debugInfo(`Normalized processor: ${processor}`);
    anObject[attribute] = processor;
  }

  //.
  getNormalizedProcessor(aValue) {
    if (!aValue) {
      return "";
    }
    let original = aValue;
    let result='';
    //remove unuseful words if necessary, as 'Processor' or any other written in the array in constructor
    for (var k in this.unusefulWords) {
      if (
        original.toUpperCase().includes(this.unusefulWords[k].toUpperCase())
      ) {
        let regex = new RegExp(this.unusefulWords[k], "gi");
        original = original.replace(regex, "");
      }
    }
    console.log("original: " + original);
    let cores = "";
    //checks if processor is for example 'octa core', 'single-core', etc..
    let regExp = /(([\w])*([ ]|[-])*([\w])*)(core)+/gi;
    let partialExpression = regExp.exec(original);
    //caso afirmativo guardar en string
    if (partialExpression != null) {
      cores += partialExpression[0];
      result+=cores + ' ';
    }
    console.log("cores: " + cores);

    //ver si contiene xxx ghz o xxx Mhz
    let speedProcessor = "";
    regExp = /((([0-9]+([.])+[0-9]+) *(ghz)*)|(([0-9]+) *(mhz)))/gi;
    partialExpression = regExp.exec(original);
    if (partialExpression != null) {
      speedProcessor += partialExpression[0];
      result += speedProcessor;
    }
    console.log("speedProcessor: " + speedProcessor);
    //caso afirmativo guardar
    //juntar ambos resultados

    return result;
  }
};
