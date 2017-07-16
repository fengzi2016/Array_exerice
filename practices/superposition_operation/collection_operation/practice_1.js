'use strict';
function hybrid_operation(collection) {
  let Arr=collection.map(function (number) {
    return number*3+2;
  });
  let result=Arr.reduce(function (sum,value) {
    return sum+value;
  });
  return result;
}
module.exports = hybrid_operation;
