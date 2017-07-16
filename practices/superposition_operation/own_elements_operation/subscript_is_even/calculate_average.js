'use strict';
function  calculate_average (collection) {
  let count=0;
  let sum=collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
    if(currentIndex%2!==0){
      count++;
      return accumulator+currentValue;
    }else{
      return accumulator;
    }
  },0);
  return Math.round(sum/count);
}
module.exports = calculate_average;
