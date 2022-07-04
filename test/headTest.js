const assertEqual = require('../assertEqual');
const head = require('../head');

//all true
assertEqual(head([1,2,3,4,5]), 1);
assertEqual(head(['test']), 'test');
assertEqual(head(['test',[]]),'test');
assertEqual(head([]),);
assertEqual(head([5]),5);