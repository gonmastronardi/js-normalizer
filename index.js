const jsonfile = require("jsonfile");
const fieldNormalizerFactory = require("./classes/fieldNormalizerFactory");
const ObjectNormalizer = require("./classes/ObjectNormalizer");

const inputFile = "./data/input.json";
const outpitFile = "./data/output.json";

var configuration = {
  precio: fieldNormalizerFactory.monetaryAmountNormalizer,
  memoriaRam: fieldNormalizerFactory.memoryNormalizer,
  marca: fieldNormalizerFactory.brandNormalizer,
  tamanoPantalla: fieldNormalizerFactory.screenSizeNormalizer,
  camaraPrincipal: fieldNormalizerFactory.megapixelNormalizer,
  memoriaInterna: fieldNormalizerFactory.memoryNormalizer,
  bateria: fieldNormalizerFactory.batteryNormalizer
};

const normalizer = new ObjectNormalizer(configuration);

jsonfile
  .readFile(inputFile)
  .then(result => normalizer.normalizeObjectsInMap(result))
  .then(result => jsonfile.writeFile(outpitFile, result))
  .catch(err => console.error(err));
