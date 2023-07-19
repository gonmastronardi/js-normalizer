// import {MonetaryAmountNormalizer, CleanNormalizer} from '../classes/Normalizers.js'
import a from '../classes/Normalizers.js'

let unusefulWordsForName = [
    "Celular",
    "Liberado",
    "Libre",
    "Cuotas",
    "Sin",
    "Interes",
    "Original",
    "Nuevo",
    "Modelo",
    "\\*1\\*",
  ];

//configuration for each field of the JSON object to normalize
var configuration = {
    name: new a.CleanNormalizer(unusefulWordsForName),
    price:  new a.MonetaryAmountNormalizer(),
  
};

export default configuration;