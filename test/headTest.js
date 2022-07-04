const assertEqual = require('../assertEqual');
const head = require('../head');
const assert = require('chai').assert;

describe("#head", () => {
  it('returns 1 for [1,2,3,4,5]', () => {
    assert.strictEqual(head([1,2,3,4,5]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 'test for ['test',[]]", () => {
    assert.strictEqual(head(['test',[]]), 'test'); 
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), ); 
  });
});