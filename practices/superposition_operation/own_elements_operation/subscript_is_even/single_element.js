'use strict';
function single_element(collection){
  let evenArr=collection.filter(function (number,index) {
    return index%2!==0;
  });
  let result=evenArr.reduce(function (accumulator,currentValue,currentIndex,collection) {
    if (collection.lastIndexOf(currentValue) === collection.indexOf(currentValue)) {
      accumulator.push(currentValue);
      return accumulator;
    }else {
      return accumulator;
    }
  },[]);
  return result;
}
module.exports = single_element;
