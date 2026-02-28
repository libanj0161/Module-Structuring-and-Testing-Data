// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// They have used the same variable name twice. This will cause an error. Also line 9 is not needed because the function takes a decimal as an argument. 
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// SyntaxError: Identifier 'decimalNumber' has already been declared. 
// ReferenceError: decimalNumber is not defined

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  console.log("percentage",percentage)
  return percentage;
}
convertToPercentage(0.8)