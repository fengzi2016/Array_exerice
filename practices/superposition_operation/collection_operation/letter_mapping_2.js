'use strict';

function average_to_letter(collection) {
  let sum=collection.reduce(function (sum,value) {
    return sum+value;
  });
  let median= Math.round(sum/collection.length);
  return String.fromCharCode(median+96);
}
module.exports = average_to_letter;

