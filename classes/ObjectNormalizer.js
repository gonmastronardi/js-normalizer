module.exports = class ObjectNormalizer {
  constructor(aConfiguration) {
    this.configuration = aConfiguration;
  }

  normalizeObjectsInMap(aMapOfObjects) {
    for (var key in aMapOfObjects) {
      aMapOfObjects[key] = this.normalizeObject(aMapOfObjects[key]);
    }
    return aMapOfObjects;
  }

  normalizeObject(anObject) {
    for (var key in this.configuration) {
      this.configuration[key].normalize(anObject, key);
    }
    return anObject;
  }
};
