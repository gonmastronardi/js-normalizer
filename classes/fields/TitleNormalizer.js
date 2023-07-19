import FieldNormalizer from "./FieldNormalizer.js";

export default class TitleNormalizer extends FieldNormalizer {
  constructor() {
    super();
    //words to remove from title description
    this.unusefulWords = [
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
      "Nuevo",
    ];
  }

  normalize(anObject, anAttibute) {
    let title = anObject[anAttibute];
    this.debugField(`Title: ${title}`);
    title = this.getNormalizedTitle(title);
    this.debugInfo(`Normalized title: ${title}`);
    anObject[anAttibute] = title;
  }

  //it receives a string. If it finds some unuseful word, it removes it.
  getNormalizedTitle(aValue) {
    if (!aValue) {
      return "";
    }
    let result = aValue;
    for (var k in this.unusefulWords) {
      if (result.toUpperCase().includes(this.unusefulWords[k].toUpperCase())) {
        let regex = new RegExp(this.unusefulWords[k], "gi");
        result = result.replace(regex, "");
      }
    }
    //remove extra whitespaces
    result = result.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
    return result;
  }
};
