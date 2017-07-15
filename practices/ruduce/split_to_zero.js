'use strict';

function  split_to_zero(number, interval) {
  let baseArr = [number];
  while(baseArr[baseArr.length-1]>0){
    baseArr.push(baseArr.reduce(function(accumulator, currentValue, currentIndex, collection) {
      return parseFloat((collection[collection.length - 1] - interval).toFixed(2));
    },0));
  }
  return baseArr;
}
module.exports = split_to_zero;
