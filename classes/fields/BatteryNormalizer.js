const FieldNormalizer = require("./FieldNormalizer");

module.exports = class BatteryNormalizer extends FieldNormalizer {
  normalize(anObject, attribute) {
    let battery = anObject[attribute];
    this.debugField(`Battery: ${battery}`);
    battery = this.getNormalizedBattery(battery);
    this.debugInfo(`Normalized battery: ${battery}`);
    anObject[attribute] = battery;
  }

  //it returns the given number + mAh, or '' if undefined or null.
  getNormalizedBattery(aValue) {
    if (!aValue) {
      return "";
    }
    let regExp = /([0-9]+[.]*[0-9]* *(Ah)+)/gm;
    let result = regExp.exec(aValue);
    if (result != null){
      let battery = result[0];
      battery = parseFloat(battery);
      return battery*1000 + " mAh";
    }
    result = parseFloat(aValue);
    if (result){
      return result + " mAh";
    }
    return '';
  }
};
