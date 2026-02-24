const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
console.log("penceStringWithoutTrailingP",penceStringWithoutTrailingP)
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
console.log("paddedPenceNumberString",paddedPenceNumberString)
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
console.log("pounds",pounds)
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
console.log("pence",pence)
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 3-6. It makes a new string penceStringWithoutTrailingP containing all the characters of penceString except the last one which is the trailing character "P". It uses the substring() method by specifying the start and end indexes.
// 8. It makes a new variable called paddedPenceNumberString, and then stores the result of calling padStart on the previous variable which is penceStringWithoutTrailingP. This adds zeros at the beginning of the string if its less than three characters. 
// 10. It makes a new variable called pounds, it takes paddedPenceNumberString and removes the last two characters. So the value of  pounds is three.
// 15. It makes a new variable called pence. It takes paddedPenceNumberString and takes the last two characters, if its less than two characters it will pad it with zeros until its two characters. So the result is 99.
// 19. It console logs pounds and pence together as one string with a pound sign.