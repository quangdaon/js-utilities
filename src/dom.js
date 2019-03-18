/**
 * Helpers for interactions with the DOM
 * @namespace DOM
 */

/**
 * Converts HTML text to Node object. NOTE: requires support for {@link https://caniuse.com/#feat=template|<template> element}
 * @param {string} html
 * @returns {Node}
 */
export function parseHTML(html) {
	const t = document.createElement('template');
	t.innerHTML = html;
	return t.content.cloneNode(true);
}

/**
 * Map attributes to an object with the format: {attribute: value}
 * @param {Node} elem - Element object
 * @param {Array<string>} attrs - Array of requested attribute names
 * @example
 * // Given that myInput is: <input value="Bob" name="firstName" />
 * // Returns: {value: "Bob"}
 * DOM.getAttributes(myInput, ['value'])
 * @returns {object} - object of requested attributes and their values
 */
export function getAttributes(elem, attrs) {
	const obj = {};
	attrs.forEach(a => {
		obj[a] = elem.getAttribute(a);
	});

	return obj;
}

/**
 * Apply object of attributes to dom element
 * @param {Node} elem - Element object
 * @param {object} attrs - Object in the form of {attribute: value}
 * @example
 * // Given that myInput is: <input value="Bob" name="firstName" />
 * // Output: <input value="David" name="firstName" class="auto" />
 * DOM.applyAttributes(myInput, {value: 'David', class: 'auto'})
 */
export function applyAttributes(elem, attrs) {
	Object.keys(attrs).forEach(t => {
		if (elem.hasAttribute(t)) {
			elem.setAttribute(t, attrs[t]);
		}
	});
}

const DOM = { parseHTML, getAttributes, applyAttributes };

export default DOM;