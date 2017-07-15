'use strict';

function collect_max_number(collection) {
    return collection.reduce(function (a,b) {
      if(a>b){
        return a;
      }else{
        return b;
      }
    });
}

module.exports = collect_max_number;
