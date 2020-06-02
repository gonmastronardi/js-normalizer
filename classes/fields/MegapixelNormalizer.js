const FieldNormalizer = require("./FieldNormalizer");

module.exports = class MegapixelNormalizer extends FieldNormalizer {
  normalize(anObject, attribute) {
    let mpx = anObject[attribute];
    this.debugField(`MPixel: ${mpx}`);
    mpx = this.getNormalizedMegapixel(mpx);
    this.debugInfo(`Normalized MPixel: ${mpx}`);
    anObject[attribute] = mpx;
  }

  //it returns the number of megapixels + word 'MP'.
  getNormalizedMegapixel(aValue) {
    if (!aValue || aValue == " ") {
      return "";
    }
    let tempMpx = aValue;
    //regExp checks if a string contains a number followed by the word 'mpx', 'megap' or 'mp'.
    let regExp = /([0-9]+[.]*[0-9]* *(mpx|megap|mp)+)/gi;
    let partialExpression = regExp.exec(tempMpx); //Devuelve algo o null/
    let result;
    let max = 0;
    if (partialExpression == null) {
      //If it doesn't find a regExp, gets the numbers in the array and returns the biggest one as result.
      let numbers = tempMpx.match(/(\d[\d\.]*)/g);
      let max = Math.max(...numbers);
      result = max + " MP";
      return result;
    }

    //gets the biggest mp number
    while (partialExpression != null) {
      let aux = parseInt(partialExpression[0]);
      if (aux > max) {
        max = aux;
      }
      partialExpression = regExp.exec(tempMpx);
    }
    result = parseInt(max) + " MP";
    return result;
  }
};
