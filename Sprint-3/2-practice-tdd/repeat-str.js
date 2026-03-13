function repeatStr(str, count) {
  if (count < 0) {
<<<<<<< Updated upstream
    throw new Error("invalid count");
  }
  return str.repeat(count);
=======
    throw new Error("Count cannot be negative");
  }

  if (count === 0) {
    return "";
  }

  if (count === 1) {
    return str;
  }

  let result = "";

  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
>>>>>>> Stashed changes
}
// call the repeat function on the string and pass in count.
module.exports = repeatStr;
