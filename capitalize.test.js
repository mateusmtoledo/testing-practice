import capitalize from './capitalize';

test('Works with all lower case', () => {
    expect(capitalize('function')).toBe('Function');
});

test('Works with lower and upper case', () => {
    expect(capitalize('cUrREnT')).toBe('CUrREnT');
});