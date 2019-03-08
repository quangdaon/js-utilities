export function randomBetween(min, max, step) {
    const base = Math.random() * (max - min) + min;

    if (step) return Math.floor(base / step) * step;

    return base;
}

export function randomIndexInArray(arr) {
    return randomBetween(0, arr.length, 1);
}

export function randomFromArray(arr) {
    return arr[randomIndexInArray(arr)];
}

// Pass in array of object: {weight: num, value: any}
export function randomWeighted(arr) {
    const sum = arr.reduce((a, b) => a + b.weight, 0);

    let seed = Math.random() * sum;

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (seed < curr.weight) return curr.value;

        seed -= curr.weight;
    }
}

export default {
    between: randomBetween,
    arrayIndex: randomIndexInArray,
    inArray: randomFromArray,
    weighted: randomWeighted
}