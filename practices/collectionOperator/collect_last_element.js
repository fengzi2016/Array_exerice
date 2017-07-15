'use strict';

function collect_last_element(collection) {
  return collection.find(function(number,tag,arr){
    if (tag===arr.length-1){
      return number;
    }
  });
}

module.exports = collect_last_element;
