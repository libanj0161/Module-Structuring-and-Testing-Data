// This statement loads the getAngleType function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getAngleType = require("../implement/1-get-angle-type");

// TODO: Write tests in Jest syntax to cover all cases/outcomes,
// including boundary and invalid cases.

// Case 1: Acute angles
test(`should return "Acute angle" when (0 < angle < 90)`, () => {
  // Test various acute angles, including boundary cases
  expect(getAngleType(1)).toEqual("Acute angle");
  expect(getAngleType(45)).toEqual("Acute angle");
  expect(getAngleType(89)).toEqual("Acute angle");
});

// Case 2: Right angle
test(`should return "Right angle" when (angle === 90)`, () => {
  // Test various right angles, including boundary cases
  expect(getAngleType(90)).toEqual("Right angle");
});
// Case 3: Obtuse angles
test(`should return "Obtuse angles" when (angle > 90 && < 180)`, () => {
  // Test various obtuse angles, including boundary cases
  expect(getAngleType(96)).toEqual("Obtuse angle");
  expect(getAngleType(142)).toEqual("Obtuse angle");
  expect(getAngleType(178)).toEqual("Obtuse angle");
});
// Case 4: Straight angle
test(`should return "Straight angle" when (angle === 180)`, () => {
  // Test various straight angles, including boundary cases
  expect(getAngleType(180)).toEqual("Straight angle");
});
// Case 5: Reflex angles
test(`should return "Reflex angles" when (angle > 180 && < 360)`, () => {
  // Test various reflex angles, including boundary cases
  expect(getAngleType(199)).toEqual("Reflex angle");
  expect(getAngleType(245)).toEqual("Reflex angle");
  expect(getAngleType(306)).toEqual("Reflex angle");
});
// Case 6: Full rotation
test("returns full rotation for 360 degrees (angle === 360))", () => {
  expect(getAngleType(360)).toBe("Full rotation");
});
// Case 7: Invalid angles
test(`should return "Invalid angles" when (angle >360)`, () => {
  // Test various invalid angles, including boundary cases
  expect(getAngleType(400)).toEqual("Invalid angle");
});
// Case 8: Invalid angles
test(`should return "Invalid angles" when (angle <0)`, () => {
  expect(getAngleType(-7)).toBe("Invalid angle");
});
