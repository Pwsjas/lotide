# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pwsjas/lotide`

**Require it:**

`const _ = require('@pwsjas/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: takes two arrays, uses eqArrays() to determine whether two arrays are equal, console.logs the result
* `assertEqual(actual, expected)`: takes two values (not an object or array), and console.logs whether they are equal or not
* `assertObjectsEqual(actual, expected)`: takes two objects, uses eqObjects() to determine whether two objects are equal, console.logs the result
* `countLetters(letters)`: takes a string, and count the number of each letter within the string, displaying the result as an object of letters (a: 2, b: 7, etc)
* `countOnly(allItems, itemsToCount)`: takes an array and object, returns an object containing the amount of each value in the array, that was  listed in the input object
* `eqArrays(arr1, arr2)`: takes two arrays, compares them for equivalence, returns true or false
* `eqObjects(obj1, obj2)`: takes two objects, compares them for equivalence, returns true or false (only to a depth of 1 nested object)
* `findKey(obj, callback)`:  takes an object and a callback function, returns the first key for which the callback returns a truthy value, otherwise returns undefined
* `findKeyByValue(objToSearch, value)`: takes an object and a value, returns the first key which contains that value, otherwise returns undefined
* `flatten(arr)`: takes an array containing nested arrays, and returns a "flat" version, one single depth array of values (only to a depth of 1 nested array)
* `head(arr)`: takes an array, returns the first value in the array (array[0]);
* `letterPositions(sentence)`: takes a string, returns an object containing the index of each letter (a: 0, b: [4, 7], etc)
* `map(array, callback)`: takes an array and a callback function, returns an array modified by the callback function
* `middle(arr)`: takes an array, returns an array contianing the middle value (2 values in the case of an even length array)
* `tail(array)`: takes an array, returns an array containing everything but the first element(head) of the array
* `takeUntil(array, callback)`: takes an array and a callback function, iterates through the array, copying every value until the callback function returns true, returns the copied array
* `without(...)`: takes two arrays, one "source" array, and one array containing values to remove from the source array, returns a copy of the "source" array, without the values of the second array