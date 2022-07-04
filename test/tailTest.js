const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

//all true
assertArraysEqual(tail([1,2,3,4,5]), [2,3,4,5]);
assertArraysEqual(tail(['test']), []);
assertArraysEqual(tail(['test',]), []);
assertArraysEqual(tail([1,'hi', true]), ['hi', true]);
assertArraysEqual(tail([]),[]);