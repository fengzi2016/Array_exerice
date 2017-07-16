'use strict';
function amount_even(collection) {
  let evenArr=collection.filter(function (number) {
    return number%2===0;
  })
  return evenArr.reduce(function (sum,value) {
    return sum+value;
  });
}

module.exports = amount_even;
