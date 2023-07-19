import TitleNormalizer from '../classes/fields/TitleNormalizer';
const titleNormalizer = new TitleNormalizer();

describe('getNormalizedTitle', () => {
    it('should normalize: Celular libre motorola moto G6 azul. Expected: motorola moto G6 azul', () => {
        let result = titleNormalizer.getNormalizedTitle('Celular libre motorola moto G6 azul');
        expect(result).toBe('motorola moto G6 azul');
    });
    it('should normalize: Celular liberado Samgung Galaxy S9. Expected: Samgung Galaxy S9', () => {
        let result = titleNormalizer.getNormalizedTitle('Celular liberado Samgung Galaxy S9');
        expect(result).toBe('Samgung Galaxy S9');
    });
    it('should normalize: Celular Samsung Galaxy S9 Plus Liberado 6 Cuotas Sin Interes. Expected: Samsung Galaxy S9 Plus 6', () => {
        let result = titleNormalizer.getNormalizedTitle('Celular Samsung Galaxy S9 Plus Liberado 6 Cuotas Sin Interes');
        expect(result).toBe('Samsung Galaxy S9 Plus 6');
    });
    it('should normalize: Samsung S9 liberado original. Expected: Samsung S9', () => {
        let result = titleNormalizer.getNormalizedTitle('Samsung S9 liberado original');
        expect(result).toBe('Samsung S9');
    });
    it('should normalize: \'\'. Expected: \'\'', () => {
        let result = titleNormalizer.getNormalizedTitle(' ');
        expect(result).toBe('');
    });
    it('should normalize: undefined. Expected: \'\'', () => {
        let result = titleNormalizer.getNormalizedTitle(undefined);
        expect(result).toBe('');
    });
    it('should normalize: null. Expected: \'\'', () => {
        let result = titleNormalizer.getNormalizedTitle(null);
        expect(result).toBe('');
    });
});