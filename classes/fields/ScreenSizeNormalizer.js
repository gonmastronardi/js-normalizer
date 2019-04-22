const FieldNormalizer = require("./FieldNormalizer");

module.exports = class ScreenSizeNormalizer extends FieldNormalizer{

    normalize(anObject, anAttibute){
        let screenSize = anObject[anAttibute];
        this.debugField(`Screen size: ${screenSize}`);
        screenSize = this.normalizeScreenSize(screenSize);
        this.debugInfo(`Normalized screen size: ${screenSize}`);
        anObject[anAttibute] = screenSize;
    }

    normalizeScreenSize(aValue){
        if (aValue === undefined || aValue === null || aValue == '') {
            return "";
        }
        let size = parseFloat(aValue.replace(',','.'));
        return size += ' "';
    }


}