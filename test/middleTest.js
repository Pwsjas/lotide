const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
//all true
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle(['test', true, 55, 'test']), [true, 55]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([]), []);