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
    const min = isUpperCase(char) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    const max = min + 25;
    let newCharCode = charCode + num;
    while (newCharCode > max) {
        newCharCode = newCharCode - 26;
    }
    while (newCharCode < min) {
        newCharCode = newCharCode + 26;
    }
    return String.fromCharCode(newCharCode);
}

function caesarCipher(string, num) {
    const arr = string.split('');
    const newArr = [];
    arr.forEach(char => {
        newArr.push(isLetter(char) ? shiftChar(char, num) : char);
    });
    return newArr.join('');
}

export default caesarCipher;