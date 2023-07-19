import BrandNormalizer from '../classes/fields/BrandNormalizer';
const brandNormalizer = new BrandNormalizer();

describe('getNormalizedBrand', () => {
    it('should normalize: Samsung. Expected: Samsung', () => {
        let result = brandNormalizer.getNormalizedBrand('Samsung','');
        expect(result).toBe('Samsung');
    });
    it('should normalize: SAMSUNG. Expected: Samsung', () => {
        let result = brandNormalizer.getNormalizedBrand('SAMSUNG','');
        expect(result).toBe('Samsung');
    });
    it('should normalize: \'\'. Expected: \'\'', () => {
        let result = brandNormalizer.getNormalizedBrand(' ','');
        expect(result).toBe('');
    });
    it('should normalize: undefined. Expected: \'\'', () => {
        let result = brandNormalizer.getNormalizedBrand(undefined,'');
        expect(result).toBe('');
    });
    it('should normalize: null. Expected: \'\'', () => {
        let result = brandNormalizer.getNormalizedBrand(null,'');
        expect(result).toBe('');
    });
});

