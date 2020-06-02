const FieldNormalizer = require("./FieldNormalizer");

module.exports = class SpeedProcessorNormalizer extends FieldNormalizer {
  constructor() {
    super();
    //words to remove from title description
    this.unusefulWords = ["Procesador", "Processor"];
  }

  normalize(anObject, attribute) {
    let speedProcessor = anObject[attribute];
    this.debugField(`Speed processor: ${speedProcessor}`);
    speedProcessor = this.getNormalizedSpeedProcessor(speedProcessor);
    this.debugInfo(`Normalized processor: ${speedProcessor}`);
    anObject[attribute] = speedProcessor;
  }

  //.
  getNormalizedSpeedProcessor(aValue) {
    if (!aValue) {
      return "";
    }
    let original = aValue;
    let speedProcessor = this.hasAnySpeedValues(original);
    if (speedProcessor) return speedProcessor;
    return "";
  }

  hasAnySpeedValues(aValue) {
    //check if contains 'xxx ghz' or 'xxx Mhz'
    let regExp = /((([0-9]+[.|,]*[0-9]*))+ *([ghz|mhz]+)*)/gi;
    let partialExpression = regExp.exec(aValue);
    //caso afirmativo guardar en string
    let speed = 0;
    if (partialExpression == null) {
      return false;
    } else {
      while (partialExpression != null) {
        partialExpression[0] = partialExpression[0].replace(",", ".");
        if (parseFloat(partialExpression[0]) > speed) {
          speed = parseFloat(partialExpression[0]);
        }
        partialExpression = regExp.exec(aValue);
      }
      if (speed.toString().length > 3) {
        return speed + " mHz";
      } else {
        return speed * 1000 + " mHz";
      }
    }
  }

};
