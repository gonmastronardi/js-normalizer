const MemoryNormalizer = require('../classes/fields/MemoryNormalizer');
const memoryNormalizer = new MemoryNormalizer();

describe('getNormalizedMemory', () => {
    it('should normalize: 3GB. Expected: 3 GB', () => {
        let result = memoryNormalizer.getNormalizedMemory('3GB');
        expect(result).toBe('3 GB');
    });
    it('should normalize: 3gb. Expected: 3 GB', () => {
        let result = memoryNormalizer.getNormalizedMemory('3gb');
        expect(result).toBe('3 GB');
    });
    it('should normalize: 3 GB. Expected: 3 GB', () => {
        let result = memoryNormalizer.getNormalizedMemory('3 GB');
        expect(result).toBe('3 GB');
    });
    it('should normalize: \'\'. Expected: \'\'', () => {
        let result = memoryNormalizer.getNormalizedMemory(' ');
        expect(result).toBe('');
    });
    it('should normalize: 6GB LPDDR4X. Expected: 6 GB', () => {
        let result = memoryNormalizer.getNormalizedMemory('6GB LPDDR4X');
        expect(result).toBe('6 GB');
    });
    it('should normalize: 6 GB LPDDR4X. Expected: 6 GB', () => {
        let result = memoryNormalizer.getNormalizedMemory('6 GB LPDDR4X');
        expect(result).toBe('6 GB');
    });
    it('should normalize: undefined. Expected: \'\'', () => {
        let result = memoryNormalizer.getNormalizedMemory(undefined);
        expect(result).toBe('');
    });
    it('should normalize: null. Expected: \'\'', () => {
        let result = memoryNormalizer.getNormalizedMemory(null);
        expect(result).toBe('');
    });
});

