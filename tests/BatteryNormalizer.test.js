const BatteryNormalizer = require('../classes/fields/BatteryNormalizer');
const batteryNormalizer = new BatteryNormalizer();

describe('getNormalizedBattery', () => {
    it('should normalize: 3000 mAh. Expected: 3000 mAh', () => {
        let result = batteryNormalizer.getNormalizedBattery('3000 mAh');
        expect(result).toBe('3000 mAh');
    });
    it('should normalize: 3000mAh. Expected: 3000 mAh', () => {
        let result = batteryNormalizer.getNormalizedBattery('3000mAh');
        expect(result).toBe('3000 mAh');
    });
    it('should normalize: 3000 mah. Expected: 3000 mAh', () => {
        let result = batteryNormalizer.getNormalizedBattery('3000 mah');
        expect(result).toBe('3000 mAh');
    });
    it('should normalize: 3 Ah. Expected: 3000 mAh', () => {
        let result = batteryNormalizer.getNormalizedBattery('3 Ah');
        expect(result).toBe('3000 mAh');
    });
    it('should normalize: 3.5 Ah. Expected: 3500 mAh', () => {
        let result = batteryNormalizer.getNormalizedBattery('3.5 Ah');
        expect(result).toBe('3500 mAh');
    });
    //empty string
    it('should normalize: \'\'. Expected: \'\'', () => {
        let result = batteryNormalizer.getNormalizedBattery(' ');
        expect(result).toBe('');
    });
    it('should normalize: 3000. Expected: 3000 mAh', () => {
        let result = batteryNormalizer.getNormalizedBattery('3000');
        expect(result).toBe('3000 mAh');
    });
    it('should normalize: 3000 mA. Expected: 3000 mAh', () => {
        let result = batteryNormalizer.getNormalizedBattery('3000 mA');
        expect(result).toBe('3000 mAh');
    });
    it('should normalize: Polimeros de Litio (LiPo). Expected: \'\'', () => {
        let result = batteryNormalizer.getNormalizedBattery('Polimeros de Litio (LiPo)');
        expect(result).toBe('');
    });
    it('should normalize: undefined. Expected: \'\'', () => {
        let result = batteryNormalizer.getNormalizedBattery(undefined);
        expect(result).toBe('');
    });
    it('should normalize: null. Expected: \'\'', () => {
        let result = batteryNormalizer.getNormalizedBattery(null);
        expect(result).toBe('');
    });
});

