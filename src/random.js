/**
 * Random generators
 * @namespace Random
 */

/**
 * Get random number between two numbers, with an optional step
 * @param {number} min - Lower bound
 * @param {number} max - Upper bound
 * @param {number} [step] - Round to closest
 * @example
 * // 73.254546, 36.164546, 93.12345
 * Random.between(1, 100)
 * @example
 * // 400, 900, 200
 * Random.between(200, 1000, 100)
 * @example
 * // 6, 3.5, 8.5
 * Random.between(0, 10, 0.5)
 * @returns number - random number between min and max, rounded to the nearest step
 */
export function between(min, max, step) {
	const base = Math.random() * (max - min) + min;

	if (step) return Math.floor(base / step) * step;

	return base;
}

/**
 * Get random index in an array
 * @param {Array} arr
 * @returns number - random index in given array
 */
export function arrayIndex(arr) {
	return between(0, arr.length, 1);
}

/**
 * Get random element in an array
 * @param {Array.<T>} arr
 * @returns T
 * @template T
 */
export function inArray(arr) {
	return arr[arrayIndex(arr)];
}

/**
 * Get random element in an array with weights
 * @param {Array.<{weight: number, value: T}>} arr
 * @example
 * // 20% chance of "Option 1"
 * Random.weighted([{value: 'Option 1', weight: 1}, {value: 'Option 2', weight: 5}])
 * @example
 * // 1% chance of "Option 3"
 * Random.weighted([{value: 'Option 1', weight: 50}, {value: 'Option 2', weight: 49}, {value: 'Option 3', weight: 1}])
 * @returns T
 * @template T
 */
export function weighted(arr) {
	const sum = arr.reduce((a, b) => a + b.weight, 0);

	let seed = Math.random() * sum;

	for (let i = 0; i < arr.length; i++) {
		const curr = arr[i];
		if (seed < curr.weight) return curr.value;

		seed -= curr.weight;
	}
}

const Random = {
	between,
	arrayIndex,
	inArray,
	weighted
};

export default Random;