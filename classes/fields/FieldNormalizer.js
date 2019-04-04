const debugField = require("../../lib/debuggers").field;
const debugInfo = require("../../lib/debuggers").info;

module.exports = class FieldNormalizer {
  constructor() {
    //if setted, console.logs fields properties
    this.debugField = debugField;
    this.debugInfo = debugInfo;
  }

  normalize(anObject, attribute) {
    throw new TypeError("Must override method");
  }
};
