import reverseString from './reverseString';

test('Works with even number of characters', () => {
    expect(reverseString('function')).toBe('noitcnuf');
});

test('Works with even number of characters', () => {
    expect(reverseString('statement')).toBe('tnemetats');
});

test('Works with spaces', () => {
    expect(reverseString('this statement')).toBe('tnemetats siht');
});