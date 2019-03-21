const jsonfile = require("jsonfile");
const fieldNormalizerFactory = require('./classes/fieldNormalizerFactory');
const ObjectNormalizer = require("./classes/ObjectNormalizer");

const inputFile = "./data/input.json";
const outpitFile = "./data/output.json";

var configuration = {
  precio : fieldNormalizerFactory.priceNormalizer,
  memoriaRam : fieldNormalizerFactory.memoryNormalizer
};

const normalizer = new ObjectNormalizer(configuration);

jsonfile
  .readFile(inputFile)
  .then(result => normalizer.normalizeObjectsInMap(result))
  .then(result => jsonfile.writeFile(outpitFile, result))
  .catch(err => console.error(err));
