module.exports = class ObjectNormalizer {
  constructor(configuration) {
    this.configuration = configuration;
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
