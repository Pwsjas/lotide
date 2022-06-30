const takeUntil = (array, callback) => {
  const output = [];
  for (let value of array) {
    if (callback(value)) {
      return output;
    }
    output.push(value);
  }
  return output;
};