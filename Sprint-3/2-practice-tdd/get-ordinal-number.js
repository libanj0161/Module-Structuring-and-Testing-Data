function getOrdinalNumber(num) {
  const lastdigit = num % 10;
  if (lastdigit === 1) {
    return `${num}st`;
  }

  if (lastdigit === 2) {
    return `${num}nd`;
  }

  if (lastdigit === 3) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}

module.exports = getOrdinalNumber;
