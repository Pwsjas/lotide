const assertEqual = require('../assertEqual');
//Test Code
assertEqual('test', 'test');  //true
assertEqual('test', 'tes');   //false
assertEqual(1,1);             //true
assertEqual(0, '0');          //false
assertEqual(true, false);     //false