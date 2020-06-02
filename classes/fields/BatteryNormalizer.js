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

    let regExp = /([0-9]+[.]*[0-9]*)/gim;
    let result = regExp.exec(aValue);
    if (result != null) {
      let battery = result[0];
      battery = parseFloat(battery);
      if (battery.toString().length >= 4) {
        return battery + " mAh";
      } else {
        return battery * 1000 + " mAh";
      }
    }
    return "";
  }
};

//quedarme ocn el numero
//si tiene 4 digitos devuelvo
//sino multiplico x1000
