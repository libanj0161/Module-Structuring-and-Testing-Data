function repeatStr(str, count) {
  if (count < 0) {
    throw new Error("invalid count");
  }
  return str.repeat(count);
}
// call the repeat function on the string and pass in count.
module.exports = repeatStr;
