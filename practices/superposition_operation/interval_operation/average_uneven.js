'use strict';

function average_uneven(collection) {
  let unevenArr=collection.filter(function (number) {
    return number%2!==0;
  });
  let unevenSum=unevenArr.reduce(function (sum,number) {
    return sum+number;
  });
  return unevenSum/unevenArr.length;
}

module.exports = average_uneven;
