// Predict and explain first...

// =============> write your prediction here
// the function will not return anything.
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// declared a variable called result and stored a*b.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  console.log(a * b);
  const result = a*b;
  return result;  
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
