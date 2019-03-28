// Randomness is hard to test. While these provide a good estimation, there's always a chance that one or more here will fail.

describe('Random Helpers', () => {
	describe('Random Number Between Function', () => {
		xit('should definitely be within the bounds');
		xit('should definitely be rounded to the step');
		xit('should probably be a relative even distribution');
	});

	describe('Random Array Index Function', () => {
		const input = [];

		xit('should definitely return an integer');
		xit('should definitely return a valid index');
		xit('should probably return a variety of indices');
	});

	describe('Random In Array Function', () => {
		const input = [];

		xit('should definitely return a value that exists in the array');
		xit('should probably return a variety of results');
	});

	describe('Random Weighted Function', () => {
		const input = [];

		xit('should probably return the results in expected distribution');
	});
});