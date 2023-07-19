import ProcessorNormalizer from '../classes/fields/ProcessorNormalizer';
const processorNormalizer = new ProcessorNormalizer();

describe('getNormalizedProcessor', () => {
    it('should normalize: Octa core. Expected: Octa core', () => {
        let result = processorNormalizer.getNormalizedProcessor('Octa core');
        expect(result).toBe('Octa core');
    });
    it('should normalize: Octa-core. Expected: Octa-core', () => {
        let result = processorNormalizer.getNormalizedProcessor('Octa-core');
        expect(result).toBe('Octa-core');
    });
    it('should normalize: Octa-core 2400 mhz. Expected: Octa-core', () => {
        let result = processorNormalizer.getNormalizedProcessor('Octa-core 2400 mhz');
        expect(result).toBe('Octa-core');
    });
    it('should normalize: Exynos 450. Expected: Exynos 450', () => {
        let result = processorNormalizer.getNormalizedProcessor('Exynos 450');
        expect(result).toBe('Exynos 450');
    });
    it('should normalize: Octa Core 2,7GHz,2.3GHz,1.9GHz. Expected: Octa Core', () => {
        let result = processorNormalizer.getNormalizedProcessor('Octa Core 2,7GHz,2.3GHz,1.9GHz');
        expect(result).toBe('Octa Core');
    });
    //empty string
    it('should normalize: \'\'. Expected: \'\'', () => {
        let result = processorNormalizer.getNormalizedProcessor(' ');
        expect(result).toBe(' ');
    });
    it('should normalize: Quad-core 1.4. Expected: Quad-core', () => {
        let result = processorNormalizer.getNormalizedProcessor('Quad-core 1.4');
        expect(result).toBe('Quad-core');
    });
    it('should normalize: Octa . Expected: Octa', () => {
        let result = processorNormalizer.getNormalizedProcessor('Octa');
        expect(result).toBe('Octa');
    });
    it('should normalize: MediaTek MT6762 Helio P22 2 GHz. Expected: MediaTek MT6762 Helio P22', () => {
        let result = processorNormalizer.getNormalizedProcessor('MediaTek MT6762 Helio P22 2 GHz');
        expect(result).toBe('MediaTek MT6762 Helio P22 ');
    });
    it('should normalize: undefined. Expected: \'\'', () => {
        let result = processorNormalizer.getNormalizedProcessor(undefined);
        expect(result).toBe('');
    });
    it('should normalize: null. Expected: \'\'', () => {
        let result = processorNormalizer.getNormalizedProcessor(null);
        expect(result).toBe('');
    });
    it('should normalize: 2 GHz. Expected: \'\'', () => {
        let result = processorNormalizer.getNormalizedProcessor('2 GHz');
        expect(result).toBe('');
    });
    it('should normalize: Snapdragon 450. Expected: Snapdragon 450', () => {
        let result = processorNormalizer.getNormalizedProcessor('Snapdragon 450');
        expect(result).toBe('Snapdragon 450');
    });
});

