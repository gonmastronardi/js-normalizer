module.exports = class SimpleNormalizer {
  normalizeObjectsInMap(aMapOfObjects) {
    for (var key in aMapOfObjects) {
      aMapOfObjects[key] = this.normalizeObject(aMapOfObjects[key]);
    }
    return aMapOfObjects;
  }

  normalizeObject(object) {
    console.log("El precio sin normalizar es: " + object.precio);
    object.precio = this.normalizePriceOf(object);
    console.log("El precio normalizado es: " + object.precio);

    //Normalizar memoriaRam
    console.log("La memoria ram sin normalizar es: " + object.memoriaRam);
    object.memoriaRam = this.normalizeMemoryOf(object);
    console.log("La memoria ram normalizada es: " + object.memoriaRam);

    console.log("-");

    return object;
  }

  normalizePriceOf(object) {
    let price = object.precio;
    price = this.getNormalizedPrice(price);
    return price;
  }

  isCharNumber(c) {
    return c >= "0" && c <= "9";
  }

  getNormalizedPrice(aPrice) {
    let price = aPrice.replace("$", "");

    price = this.normalizeDecimalOf(price);

    //Formateo de manera igual para todos.
    price = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS"
    }).format(price);

    return price;
  }

  //It returns the given price with 2 decimals for any currency
  normalizeDecimalOf(aPrice) {
    let price = aPrice;
    if (price.includes(".") || price.includes(",")) {
      let totalChars = price.length - 1;
      let totalDecimals = 0;

      //Cuento la cantidad de decimales
      while (this.isCharNumber(price.charAt(totalChars))) {
        totalDecimals++;
        totalChars--;
      }

      let decimal;

      switch (true) {
        case totalDecimals > 2:
          let original = price;
          decimal = getDecimalValue(price, totalDecimals);
          decimal = decimal.slice(0, 2);
          price = getEntirePrice(price, totalDecimals);
          price = replaceSpecialChars(price);
          if (price.length > 3) {
            price = price + "." + decimal;
          } else {
            price = original;
            price = replaceSpecialChars(price);
          }
          break;

        case totalDecimals === 2:
          decimal = getDecimalValue(price, totalDecimals);
          price = getEntirePrice(price, totalDecimals);
          price = replaceSpecialChars(price);
          price = price + "." + decimal;
          break;

        case totalDecimals === 1:
          decimal = getDecimalValue(price, totalDecimals);
          price = getEntirePrice(price, totalDecimals);
          price = replaceSpecialChars(price);
          price = price + "." + decimal + "0";
          break;
      }
    }

    function getDecimalValue(aPrice, decimals) {
      return aPrice.slice(price.length - decimals, price.length);
    }

    function replaceSpecialChars(aPrice) {
      price = aPrice.replace(",", "");
      price = price.replace(".", "");
      return price;
    }

    function getEntirePrice(aPrice, decimals) {
      return aPrice.slice(0, price.length - decimals - 1);
    }

    return price;
  }

  normalizeMemoryOf(object) {
    throw new TypeError("Must override method");
  }
};
