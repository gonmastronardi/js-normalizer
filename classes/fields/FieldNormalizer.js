const debugField = require("../../lib/debuggers").field;
const debugInfo = require("../../lib/debuggers").info;

//abstract class
module.exports = class FieldNormalizer {
  constructor() {
    //if setted, console.logs fields properties
    this.debugField = debugField;
    this.debugInfo = debugInfo;
  }

  //it must be implemented by the subclasses
  normalize(anObject, attribute) {
    throw new TypeError("Must override method");
  }
};
