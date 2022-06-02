import calculator from './calculator';

test('', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.multiply(3, 7)).toBe(21);
    expect(calculator.subtract(4, 15)).toBe(-11);
    expect(calculator.divide(24, 4)).toBe(6);
});

test('', () => {
    expect(calculator.add(2.59, 3.02)).toBeCloseTo(5.61);
    expect(calculator.multiply(3.5, 0.5)).toBeCloseTo(1.75);
    expect(calculator.subtract(15.5, 16.9)).toBeCloseTo(-1.4);
    expect(calculator.divide(29.5, 0.5)).toBeCloseTo(59);
});