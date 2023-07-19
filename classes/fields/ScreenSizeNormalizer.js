import FieldNormalizer from "./FieldNormalizer.js";

export default class ScreenSizeNormalizer extends FieldNormalizer{

    normalize(anObject, anAttibute){
        let screenSize = anObject[anAttibute];
        this.debugField(`Screen size: ${screenSize}`);
        screenSize = this.normalizeScreenSize(screenSize);
        this.debugInfo(`Normalized screen size: ${screenSize}`);
        anObject[anAttibute] = screenSize;
    }

    normalizeScreenSize(aValue){
        if (!aValue) {
            return "";
        }
        let size = parseFloat(aValue.replace(',','.'));
        return size += ' "';
    }


}