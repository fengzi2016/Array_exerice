'use strict';

function compute_average(collection) {
  let sum=collection.reduce(function (sum,value) {
    return sum+value;
  },0);
  let average=(sum/collection.length);
  return  average;
}

module.exports = compute_average;

