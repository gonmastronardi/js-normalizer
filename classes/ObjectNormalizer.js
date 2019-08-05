module.exports = class ObjectNormalizer {
  constructor(aConfiguration) {
    this.configuration = aConfiguration;
  }

  //it receives a map of JSON objects, and it normalizes each one
  normalizeObjectsInMap(aMapOfObjects) {
    for (var key in aMapOfObjects) {
      aMapOfObjects[key] = this.normalizeObject(aMapOfObjects[key]);
      console.log("-");
    }
    return aMapOfObjects;
  }

  /**
   * it receives a JSON object, iterating on the fields
   * and it calls the corresponding normalize method depending on the field configuration
   */
  normalizeObject(anObject) {
    for (var key in this.configuration) {
      this.configuration[key].normalize(anObject, key);
    }
    return anObject;
  }
};
