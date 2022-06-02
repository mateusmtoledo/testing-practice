function analyzeArray(arr) {
    const obj = {};
    obj.length = arr.length;
    obj.average = arr.reduce(((curr, prev) => curr + prev), 0) / arr.length;
    obj.max = arr.reduce(((curr, prev) => curr > prev ? curr : prev));
    obj.min = arr.reduce(((curr, prev) => curr < prev ? curr : prev));
    return obj;
}

export default analyzeArray;
