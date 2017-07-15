'use strict';

function double_to_one(collection) {
    let str=collection.toString();
    let strr=str.split(',');
    return strr.map(function(number){
      return Number(number);
    });
}
module.exports = double_to_one;
