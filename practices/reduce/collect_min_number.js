'use strict';

function collect_min_number(collection) {
  return collection.reduce(function (a,b) {
    if(a>b){
      return b;
    }else{
      return a;
    }
  });
}
module.exports = collect_min_number;

