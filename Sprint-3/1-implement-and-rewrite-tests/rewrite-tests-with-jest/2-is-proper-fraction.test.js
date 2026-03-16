// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Case 2: Proper fractions
// the numerator is smaller than the denominator, so the fraction is a proper fraction
test(`should return true when |numerator| < |denominator|`, () => {
  expect(isProperFraction(6, 7)).toEqual(true);
  expect(isProperFraction(2, 4)).toEqual(true);
});

// Case 3: Improper fractions
// numerator is bigger than denominator, so the fraction is not proper
test("should return false when numerator is bigger than denominator", () => {
  expect(isProperFraction(8, 6)).toEqual(false);
  expect(isProperFraction(4, 2)).toEqual(false);
});

// Case 4: Negative numbers
// numerator or denominator is negative, but function compares absolute values
test("should return correct result when numerator or denominator is negative", () => {
  expect(isProperFraction(-5, 9)).toEqual(true);
  expect(isProperFraction(-2, 0)).toEqual(false);
});

// Case 5: Numerator equals denominator fraction equals 1, so it is not proper
test("should return false when numerator is equal to denominator", () => {
  expect(isProperFraction(6, 6)).toEqual(false);
});

// Case 6: Numerator just less than denominator fraction is slightly below 1, so it is proper
test("should return true when numerator is just less than denominator", () => {
  expect(isProperFraction(2, 3)).toEqual(true);
});

// Case 7: Numerator greater than denominator fraction is slightly above 1, so it is not proper
test("should return false when numerator is greater than denominator", () => {
  expect(isProperFraction(6, 5)).toEqual(false);
});
