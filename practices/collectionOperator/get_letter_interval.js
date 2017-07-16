'use strict';

function get_letter_interval(number_a, number_b) {
  let collection;
  if(number_a===number_b){
    collection=[number_a];
  }else if(number_a>number_b){
    collection=[number_a];
    while(collection[collection.length-1]-1>=number_b){
      collection.push(collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
        return parseInt(collection[collection.length-1]-1);
      },[number_a]));
    }
  }else{
    collection=[number_a];
    while(collection[collection.length-1]+1<=number_b){
      collection.push(collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
        return parseInt(collection[collection.length-1]+1);
      },[number_a]));
    }
  }
  return collection.map(function (number) {
    return String.fromCharCode(number+96);
  });
}
module.exports = get_letter_interval;
