const without = function(source, itemsToRemove) {
  let result = source.slice();

  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (result[j] === itemsToRemove[i]) {
        result.splice(j, 1);
      }
    }
  }
  return result;
};