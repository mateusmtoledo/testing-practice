function isUpperCase(char) {
    return (char.toUpperCase() === char);
}

function isLetter(char) {
    const charCode = char.charCodeAt(0);
    return (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0) ||
    charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0));
}

function shiftChar(char, num) {
    const charCode = char.charCodeAt(0);
    if(!isLetter(char)) return char;
    const min = isUpperCase(char) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    const max = isUpperCase(char) ? 'Z'.charCodeAt(0) : 'z'.charCodeAt(0);
    let newCharCode = charCode + num;
    while (newCharCode > max) {
        newCharCode = newCharCode - max + min - 1;
    }
    while (newCharCode < min) {
        newCharCode = newCharCode - min + max + 1;
    }
    return String.fromCharCode(newCharCode);
}

function caesarCipher(string, num) {
    const arr = string.split('');
    const newArr = [];
    arr.forEach(char => {
        newArr.push(shiftChar(char, num));
    });
    return newArr.join('');
}

export default caesarCipher;