// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

let count = 0;

count = count + 1;

function toPounds(pennies) {
    let pounds = pennies / 100;
    return pounds;
}

console.log(toPounds(50));
console.log(toPounds(100));
console.log(toPounds(150));
console.log(toPounds(250));
console.log(toPounds(350));
