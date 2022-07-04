const middle = function(arr) {
  let output = [];
  if (arr.length <= 2) {
    return output;
  }
  const mid = Math.floor((arr.length - 1) / 2);
  if (arr.length % 2 === 0) {
    output.push(arr[mid], arr[mid + 1]);
  } else {
    output.push(arr[mid]);
  }
  return output;
};
module.exports = middle;