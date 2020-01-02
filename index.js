const jsonfile = require("jsonfile");
const fieldNormalizerFactory = require("./classes/fieldNormalizerFactory");
const ObjectNormalizer = require("./classes/ObjectNormalizer");

//const inputFile = "./data/input.json";
const inputFile = "./data/storage2.json";
const outputFile = "./data/output.json";

//configuration for each field of the JSON object to normalize
/*
var configuration = {
  titulo: fieldNormalizerFactory.titleNormalizer,
  precio: fieldNormalizerFactory.monetaryAmountNormalizer,
  memoriaRam: fieldNormalizerFactory.memoryNormalizer,
  marca: fieldNormalizerFactory.brandNormalizer,
  tamanoPantalla: fieldNormalizerFactory.screenSizeNormalizer,
  camaraPrincipal: fieldNormalizerFactory.megapixelNormalizer,
  memoriaInterna: fieldNormalizerFactory.memoryNormalizer,
  bateria: fieldNormalizerFactory.batteryNormalizer,
  sistemaOperativo: fieldNormalizerFactory.osNormalizer
};
*/
var configuration = {
  name: fieldNormalizerFactory.titleNormalizer,
  price: fieldNormalizerFactory.monetaryAmountNormalizer,
  memory: fieldNormalizerFactory.memoryNormalizer,
  camera: fieldNormalizerFactory.megapixelNormalizer,
  processor: fieldNormalizerFactory.processorNormalizer,
  screensize: fieldNormalizerFactory.screenSizeNormalizer
};

//creates an ObjectNormalizer with the previous configuration
const normalizer = new ObjectNormalizer(configuration);

//reads the input file, and it calls normalize method of the object previously created with the readed file
jsonfile
  .readFile(inputFile)
  .then(result => normalizer.normalizeObjectsInMap(result))
  .then(result => jsonfile.writeFile(outputFile, result))
  .catch(err => console.error(err));