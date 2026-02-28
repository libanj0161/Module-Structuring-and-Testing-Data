// Predict and explain first...
//  =============> write your prediction here
// it will take a string and turn the first letter into a capital.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// SyntaxError: Identifier 'str' has already been declared - str cannot be used twice as a variable name.
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// i've changed the variable name from str to result. This corrected the error and return result. 
// =============> write your new code here
function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  console.log("result",result);
  return result;
}
capitalise("pear")