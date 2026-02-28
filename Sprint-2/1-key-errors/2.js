
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// You can't put a number value into an argument.
function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number
// =============> explain this error message here
// It is not expecting a number to be in the function argument.
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log("square",square(5))