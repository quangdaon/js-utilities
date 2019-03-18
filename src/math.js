/**
 * Math helpers
 * @namespace MathHelpers
 */

/**
 * Constrain given value to lower and uppoer bounds
 * @param {number} val - Initial value
 * @param {number} min - Minimum intended value
 * @param {number} max - Maximum intender value
 * @returns {number} - val if within range, otherwise min or max
 */
export function constrain(val, min, max) {
	return Math.min(max, Math.max(val, min));
}

const MathHelpers = {
	constrain
};

export default MathHelpers;