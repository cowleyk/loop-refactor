'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    let sum = base;
    sum += arr.reduce(function(a,b){
      return a+b;
    })
    return sum;
  },

  someObjsContainProp: (arr, prop) => {
    let filtered = arr.filter(function(elem){
      return elem[prop]
    });
    if(filtered.length > 0){
      return true;
    }
    return false;
  },

  convertNameArrayToObject: (arr) => {
    let nameObj = [];
    nameObj = arr.map(function(elem){
      return {first: elem[0], last: elem[1]};
    });
    return nameObj;
  },

  objContainsProp: (arr, prop) => {
    let returnBool = true;
    arr.forEach(function(elem){
      if(!elem[prop]){
        returnBool = false;
      }
    });
    return returnBool;
  },

  stringMatch: (arr, str) => {
    let matches = [];
    matches = arr.filter(function(elem){
      return elem.match(str);
    });
    return matches;
  },
};
