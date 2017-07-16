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
  let temp=[];
  let k=0;
  return collection.map(function (number) {
    let asc=number;
    let ascArr=[];
    while(asc!==0){
      if(asc%26===0){
        temp[k]=26;
        asc=asc-26;
      }else{
        temp[k]=parseInt(asc%26);
      }
      ascArr.unshift(temp[k++]);
      asc=parseInt(asc/26);
    }
    let result=ascArr.map(function (number) {
      return String.fromCharCode(96+number);
    });
    let str='';
    for(let i=0;i<result.length;i++){
      str+=result[i];
    }
    return str;
  });
}
module.exports =get_letter_interval;

