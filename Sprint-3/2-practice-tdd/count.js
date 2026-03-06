function countChar(stringOfCharacters, findCharacter) {
  // trying to find the amount of times the findCharacter is found in the stringOfCharacters
  const lengthOfString = stringOfCharacters.length;
  console.log("lengthOfString", lengthOfString);

  // replace all instances of findCharacter in string of characters with an empty string, and then get the length. (e.g. in house replace the e with an empty string " ").
  const otherLettersLength = stringOfCharacters.replaceAll(
    findCharacter,
    ""
  ).length;

  // declaring the variable called result and subtract otherLettersLength from the lengthOfString to find the number of occurences of findCharacter.
  const result = lengthOfString - otherLettersLength;
  console.log("result", result);
  return result;
}

module.exports = countChar;

// function countOccurrences(str, char) {
//   return str.length - str.replaceAll(char, "").length;
// }
