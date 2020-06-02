const FieldNormalizer = require("./FieldNormalizer");

module.exports = class BrandNormalizer extends FieldNormalizer {
  constructor() {
    super();
    this.defaultBrands = [
      "Motorola",
      "Samsung",
      "Huawei",
      "Apple",
      "Google",
      "Sony",
      "Nokia",
      "Honor",
      "LG",
      "Xiaomi",
      "Alcatel",
      "BlackBerry",
      "HTC",
      "Lenovo",
      "Asus",
      "Blu"
    ];
  }

  normalize(anObject, anAttibute) {
    let brand = anObject[anAttibute];
    let object = anObject;
    this.debugField(`Brand: ${brand}`);
    brand = this.getNormalizedBrand(brand, object);
    this.debugInfo(`Normalized brand: ${brand}`);
    anObject[anAttibute] = brand;
  }

  /** 
   * it receives the brand field and the entire object.
   * if Brand field is not empty, it asks if the value is contained in the defaultBrands array.
   * if not, it compares every field of the object with the defaultBrands array (may be brand is on title field).
  */
  getNormalizedBrand(aValue, anObject) {
    let brand = aValue;
    let object = anObject;
    if (brand) {
      let result = this.itContainsDefaultBrand(brand);
      if (result) return result;
    } else {
      for (let key of Object.keys(object)) {
        let result = this.itContainsDefaultBrand(object[key]);
        if (result) return result;
      }
    }
    return "";
  }

  //it receives a String and returns the brand if it's contained in it. If not, returns 'false'
  itContainsDefaultBrand(aString) {
    for (var k in this.defaultBrands) {
      if (aString.toUpperCase().includes(this.defaultBrands[k].toUpperCase()))
        return this.defaultBrands[k];
    }
    return false;
  }
};