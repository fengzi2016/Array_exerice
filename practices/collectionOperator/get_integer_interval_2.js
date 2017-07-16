'use strict';

function get_integer_interval_2(number_a, number_b) {
  let collection;
  if(number_a===number_b){
    if(number_a%2===0){
      let result=[number_a];
      return result;
    }else{
      return [];
    }
  }else if(number_a>number_b){
    if(number_a%2===0){
      collection=[number_a];
      while(collection[collection.length-1]-2>=number_b){
        collection.push(collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
          return parseInt(collection[collection.length-1]-2);
        },[number_a]));
      }
    }else{
      collection=[number_a-1];
      while(collection[collection.length-1]-2>=number_b){
        collection.push(collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
          return parseInt(collection[collection.length-1]-2);
        },[number_a-1]));
      }
    }
    return collection;
  }else{
    if(number_a%2===0){
      collection=[number_a];
      while(collection[collection.length-1]+2<=number_b){
        collection.push(collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
          return parseInt(collection[collection.length-1]+2);
        },[number_a]));
      }
    }else{
      collection=[number_a+1];
      while(collection[collection.length-1]+2<=number_b){
        collection.push(collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
          return parseInt(collection[collection.length-1]+2);
        },[number_a+1]));
      }
    }
    return collection;
  }
}



module.exports = get_integer_interval_2;
