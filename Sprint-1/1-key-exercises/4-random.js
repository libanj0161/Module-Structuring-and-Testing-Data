const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num represents a whole number that is picked randomly picked between 1 and 100.
// Math.floor is rounding down a given number to the nearest integer.
// Math.random returns a random floating number between 0 (inclusive) and 1 (exclusive).