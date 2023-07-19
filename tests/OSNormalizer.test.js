import OSNormalizer from '../classes/fields/OSNormalizer';
const osNormalizer = new OSNormalizer();

describe('getNormalizedOS', () => {
    it('should normalize: Android. Expected: Android', () => {
        let result = osNormalizer.getNormalizedOS('Android','');
        expect(result).toBe('Android');
    });
    it('should normalize: iOS. Expected: iOS', () => {
        let result = osNormalizer.getNormalizedOS('iOS','');
        expect(result).toBe('iOS');
    });
    it('should normalize: Android 8.0. Expected: Android', () => {
        let result = osNormalizer.getNormalizedOS('Android 8.0','');
        expect(result).toBe('Android');
    });
    it('should normalize: \'\'. Expected: \'\'', () => {
        let result = osNormalizer.getNormalizedOS(' ','');
        expect(result).toBe('');
    });
    it('should normalize: undefined. Expected: \'\'', () => {
        let result = osNormalizer.getNormalizedOS(undefined,'');
        expect(result).toBe('');
    });
    it('should normalize: null. Expected: \'\'', () => {
        let result = osNormalizer.getNormalizedOS(null,'');
        expect(result).toBe('');
    });
});
