const movieLength = 44.69; // length of movie in seconds
console.log("movieLength",movieLength)
const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6
// b) How many function calls are there?
// 1
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It represents the amount of seconds left over after converting it into whole minutes.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It represents the total number of complete minutes in movieLength.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// It represents the total running time of the movie in hours, minutes, and seconds. A better name for this variable could be movieDuration.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// It works for most values except negative values and decimal values. This is because it only expects positive whole number inputs.