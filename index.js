const jsonfile = require("jsonfile");
// const SimpleNormalizer = require("./classes/SimpleNormalizer");
const PhoneNormalizer = require("./classes/PhoneNormalizer");

// const simpleNormalizer = new SimpleNormalizer();
const phoneNormalizer = new PhoneNormalizer();

const inputFile = "./data/input.json";
const outpitFile = "./data/output.json";

jsonfile
  .readFile(inputFile)
  // .then(result => simpleNormalizer.normalizeObjectsInMap(result))
  .then(result => phoneNormalizer.normalizeObjectsInMap(result))
  .then(result => jsonfile.writeFile(outpitFile, result))
  .catch(err => console.error(err));
