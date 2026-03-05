// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

test(`for positive`, () => {
  expect(isProperFraction(6, 7)).toEqual(true);
  expect(isProperFraction(2, 4)).toEqual(true);
});

test(`should return false for improper fractions`, () => {
  expect(isProperFraction(8, 6)).toEqual(false);
  expect(isProperFraction(4, 2)).toEqual(false);
});

test(`negative combinations`, () => {
  expect(isProperFraction(-5, 9)).toEqual(true);
  expect(isProperFraction(-2, 0)).toEqual(false);
});
