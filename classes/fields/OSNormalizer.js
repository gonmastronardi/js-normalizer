const FieldNormalizer = require("./FieldNormalizer");

module.exports = class OSNormalizer extends FieldNormalizer {
  constructor() {
    super();
    this.defaultOS = ["Android", "iOS"];
  }
  normalize(anObject, attribute) {
    let os = anObject[attribute];
    this.debugField(`OS: ${os}`);
    os = this.getNormalizedOS(os);
    this.debugInfo(`Normalized OS: ${os}`);
    anObject[attribute] = os;
  }

  getNormalizedOS(aValue) {
    if (!aValue) {
      return "";
    }
    for (var k in this.defaultOS) {
      if (aValue.toUpperCase().includes(this.defaultOS[k].toUpperCase()))
        return this.defaultOS[k];
    }
    return "";
  }
};
