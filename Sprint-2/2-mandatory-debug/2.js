// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// It will return three as a string.
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// "3"

// Explain why the output is the way it is
// =============> write your explanation here
// This is because they've defined num as 103, and they've used num inside the function, last digit of 103 is 3. 
// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(aNumber) {
  return aNumber.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
// This is because they've defined num as 103 so the result will always be 3. The arguments should be used instead (42, 105, and 806) and num should not be used. 