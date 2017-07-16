'use strict';
function get_integer_interval(number_a, number_b) {
  let collection;
  if(number_a===number_b){
    let result=[number_a];
    return result;
  }else if(number_a>number_b){
    collection=[number_a];
    while(collection[collection.length-1]-1>=number_b){
      collection.push(collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
        return parseInt(collection[collection.length-1]-1);
      },[number_a]));
    }
    return collection;
  }else{
    collection=[number_a];
    while(collection[collection.length-1]+1<=number_b){
      collection.push(collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
        return parseInt(collection[collection.length-1]+1);
      },[number_a]));
    }
    return collection;
  }
}
module.exports = get_integer_interval;

