import jsonfile from "jsonfile";
import ObjectNormalizer from "./classes/ObjectNormalizer.js";
import configuration from "./common/config.js"

//import inputFile = "./data/input.json";
const inputFile = "./data/finalStorage.json";
let outputFile = "./data/outputMay22.json";


//creates an ObjectNormalizer with the previous configuration
const normalizer = new ObjectNormalizer(configuration);

//reads the input file and it calls normalize method from ObjectNormalizer 
jsonfile
  .readFile(inputFile)
  .then(result => normalizer.normalizeObjectsInMap(result))
  .then(result => jsonfile.writeFile(outputFile, result))
  .catch(err => console.error(err));