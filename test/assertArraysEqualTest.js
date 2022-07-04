const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1,2,3,4,5], [1,2,3,4,5]);
assertArraysEqual(['test'], ['test']);
assertArraysEqual(['test',[]], ['test']); //fail
assertArraysEqual([1,'hi', true], [1,'hi', true]);
assertArraysEqual([],['']); //fail