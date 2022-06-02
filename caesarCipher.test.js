import caesarCipher from './caesarCipher';

test('', () => {
    expect(caesarCipher('Zodiac', 1)).toBe('Apejbd');
});

test('', () => {
    expect(caesarCipher('zoDIaC', 2)).toBe('bqFKcE');
});

test('', () => {
    expect(caesarCipher('zo.DI aC', 27)).toBe('ap.EJ bD');
});

test('', () => {
    expect(caesarCipher('Zodiac', -1)).toBe('Ynchzb');
});

test('', () => {
    expect(caesarCipher('zoDIaC', -2)).toBe('xmBGyA');
});

test('', () => {
    expect(caesarCipher('zo.DI aC', -27)).toBe('yn.CH zB');
});
