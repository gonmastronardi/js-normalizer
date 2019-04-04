const FieldNormalizer = require("./FieldNormalizer");

module.exports = class MonetaryAmountNormalizer extends FieldNormalizer {
  normalize(anObject, attribute) {
    let amount = anObject[attribute];

    this.debugField(`Price: ${amount}`);

    amount = this.getNormalizedAmount(amount);

    this.debugField(`Normalized price: ${amount}`);

    anObject[attribute] = amount;
  }

  isCharNumber(c) {
    return c >= "0" && c <= "9";
  }

  //it returns $ 0,00 if empty, undefined or null
  getNormalizedAmount(anAmount) {
    if (anAmount === undefined || anAmount === null){
      return '$ 0,00'
    }
    let amount = anAmount.replace("$", "");
    amount = this.normalizeDecimalOf(amount);

    //Formateo de manera igual para todos.
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS"
    }).format(amount);

  }

  //It returns the given amount with 2 decimals for any currency
  normalizeDecimalOf(anAmount) {
    let amount = anAmount;
    if (amount.includes(".") || amount.includes(",")) {
      let totalChars = amount.length - 1;
      let totalDecimals = 0;

      //Cuento la cantidad de decimales
      while (this.isCharNumber(amount.charAt(totalChars))) {
        totalDecimals++;
        totalChars--;
      }

      let decimal;

      switch (true) {
        case totalDecimals > 2:
          let original = amount;
          decimal = getDecimalValue(amount, totalDecimals);
          decimal = decimal.slice(0, 2);
          amount = getEntirePrice(amount, totalDecimals);
          amount = replaceSpecialChars(amount);
          if (amount.length > 3) {
            amount = amount + "." + decimal;
          } else {
            amount = original;
            amount = replaceSpecialChars(amount);
          }
          break;

        case totalDecimals === 2:
          decimal = getDecimalValue(amount, totalDecimals);
          amount = getEntirePrice(amount, totalDecimals);
          amount = replaceSpecialChars(amount);
          amount = amount + "." + decimal;
          break;

        case totalDecimals === 1:
          decimal = getDecimalValue(amount, totalDecimals);
          amount = getEntirePrice(amount, totalDecimals);
          amount = replaceSpecialChars(amount);
          amount = amount + "." + decimal + "0";
          break;
      }
    }

    function getDecimalValue(anAmount, decimals) {
      return anAmount.slice(amount.length - decimals, amount.length);
    }

    function replaceSpecialChars(anAmount) {
      amount = anAmount.replace(",", "");
      amount = amount.replace(".", "");
      return amount;
    }

    function getEntirePrice(anAmount, decimals) {
      return anAmount.slice(0, amount.length - decimals - 1);
    }

    return amount;
  }
};
