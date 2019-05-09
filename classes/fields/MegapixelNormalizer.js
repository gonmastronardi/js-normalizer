const FieldNormalizer = require("./FieldNormalizer");

module.exports = class MegapixelNormalizer extends FieldNormalizer {

    normalize(anObject, attribute) {
      let mpx = anObject[attribute];
      this.debugField(`MPixel: ${mpx}`);
      mpx = this.getNormalizedMegapixel(mpx);
      this.debugInfo(`Normalized MPixel: ${mpx}`);
      anObject[attribute] = mpx;
    }
  
    //it returns '' if undefined or null
    getNormalizedMegapixel(aValue) {
      if (!aValue || aValue == ' '){
        return "";
      }
      let tempMpx = aValue;
      let regExp = /([0-9]+[.]*[0-9]* *(MP|megap)+)/gi;
      let partial = regExp.exec(tempMpx); //Devuelve algo o null/
      let result;
      if (partial == null){
          //Si no encuentro una regExp, elimino caracteres y devuelvo el nro que encuentro
          tempMpx = tempMpx.replace(/[a-zA-Z]+/g, "")
          tempMpx = parseInt(tempMpx);
          result = tempMpx + ' MP';
          return result;
      }
      while(partial != null){
          result = partial[0];
          result = parseInt(result) + ' MP';
          partial = regExp.exec(tempMpx);
      }
      return result;
      
    }
  };