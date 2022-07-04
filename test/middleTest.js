const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require('chai').assert;

describe('#middle', () => { 
  it('returns [3] for [1,2,3,4,5]', () => { 
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it("returns [true, 55] for ['test', true, 55, 'test']", () => { 
    assert.deepEqual(middle(['test', true, 55, 'test']), [true, 55]);
  });
  it('returns [2,3] for [1,2,3,4]', () => { 
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it('returns [] for []', () => { 
    assert.deepEqual(middle([]), []);
  });
});