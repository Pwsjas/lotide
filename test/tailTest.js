const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#tail', () => { 
  it('returns [2,3,4,5] for [1,2,3,4,5]', () => { 
    assert.deepEqual(tail([1,2,3,4,5]), [2,3,4,5]);
  });
  it("returns [] for ['test']", () => { 
    assert.deepEqual(tail(['test']), []);
  });
  it('returns [] for ["test",]', () => { 
    assert.deepEqual(tail(['test',]), []);
  });
  it('returns [] for []', () => { 
    assert.deepEqual(tail([]), []);
  });
});