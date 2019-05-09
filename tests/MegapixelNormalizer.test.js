const MegapixelNormalizer = require('../classes/fields/MegapixelNormalizer');
const megapixelNormalizer = new MegapixelNormalizer();

describe('getNormalizedMegapixel', () => {
    it('should normalize: 12 Mpx. Expected: 12 MP', () => {
        let result = megapixelNormalizer.getNormalizedMegapixel('12 Mpx');
        expect(result).toBe('12 MP');
    });
    it('should normalize: 12 MP. Expected: 12 MP', () => {
        let result = megapixelNormalizer.getNormalizedMegapixel('12 MP');
        expect(result).toBe('12 MP');
    });
    it('should normalize: 12MP. Expected: 12 MP', () => {
        let result = megapixelNormalizer.getNormalizedMegapixel('12MP');
        expect(result).toBe('12 MP');
    });
    it('should normalize: Doble Cámara 12 megapíxeles + 12MP. Expected: 12 MP', () => {
        let result = megapixelNormalizer.getNormalizedMegapixel('Doble Cámara 12 megapíxeles + 12MP');
        expect(result).toBe('12 MP');
    });
    it('should normalize: Dual 12+5. Expected: 12 MP', () => {
        let result = megapixelNormalizer.getNormalizedMegapixel('Dual 12+5');
        expect(result).toBe('12 MP');
    });
    it('should normalize: \'\'. Expected: \'\'', () => {
        let result = megapixelNormalizer.getNormalizedMegapixel(' ');
        expect(result).toBe('');
    });
    it('should normalize: undefined. Expected: \'\'', () => {
        let result = megapixelNormalizer.getNormalizedMegapixel(undefined);
        expect(result).toBe('');
    });
    it('should normalize: null. Expected: \'\'', () => {
        let result = megapixelNormalizer.getNormalizedMegapixel(null);
        expect(result).toBe('');
    });
});