'use strict';
function double_to_one(collection) {
  let str=collection.toString();
  let strr=str.split(',');
  let result=strr.map(function(number){
    return Number(number);
  });
  return result.filter(function (number,tag,collection) {
    return collection.indexOf(number)===tag;
  });
}
module.exports = double_to_one;
