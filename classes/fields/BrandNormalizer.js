const FieldNormalizer = require("./FieldNormalizer");

module.exports = class BrandNormalizer extends FieldNormalizer{

    constructor() {
        super();
        this.brands = [
            'Motorola',
            'Samgung'
        ]
    }

    normalize(anObject, anAttibute){
        let brand = anObject[anAttibute];
        this.debugField(`Brand: ${brand}`);
        brand = this.getNormalizedBrand(brand);
        this.debugInfo(`Normalized brand: ${brand}`);
    }

    getNormalizedBrand(aValue){
        return aValue;
    }


}