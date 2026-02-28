// Predict and explain first...
//  =============> write your prediction here
// This appears correct. The function has been defined and called sum, a is 10 and b is 32 so we should get 42.
function sum(a, b) {
  return;
a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The sum of 10 and 32 is undefined. On line five the function has been exited because of the ; this because the function doesn't return anything.
// Finally, correct the code to fix the problem
//  =============> write your new code here

  function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);