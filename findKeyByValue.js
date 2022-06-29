const findKeyByValue = function(objToSearch, value) {
  for (let key of Object.keys(objToSearch)) {
    if (objToSearch[key] === value) {
      return key;
    }
  }
  return undefined;
};