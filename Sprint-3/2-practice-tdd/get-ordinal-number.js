function getOrdinalNumber(num) {
<<<<<<< Updated upstream
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
=======
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return num + "th";
  }

  if (lastDigit === 1) return num + "st";
  if (lastDigit === 2) return num + "nd";
  if (lastDigit === 3) return num + "rd";

  return num + "th";
>>>>>>> Stashed changes
}

module.exports = getOrdinalNumber;
