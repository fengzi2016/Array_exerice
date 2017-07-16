'use strict';

function hybrid_operation_to_uneven(collection) {
  let JiArr=collection.filter(function (number) {
    return number%2!==0;
  })
  let result=JiArr.map(function (number) {
    return number*3+2;
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;

