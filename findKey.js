const findKey = (obj, callback) => {
  for (let key of Object.keys(obj)) {
    console.log(key);
    console.log(obj[key]);
    if (callback(obj[key])) {
      return key;
    }
  }
};
module.exports = findKey;
