'use strict';

function find_last_even(collection) {
  let evenArr=collection.reduce(function (collection,number) {
    if(number%2===0){
      collection.push(number);
    }
    return collection;
  },[]);
  return evenArr[evenArr.length-1];
}

module.exports = find_last_even;
