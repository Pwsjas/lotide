const countLetters = function (letters) {
  const output = {};
  for (let char of letters) {
    if (char !== ' ') {
      if (output[char]) {
        output[char] += 1;
      } else {
        output[char] = 1;
      }
    }
  }
  return output;
};