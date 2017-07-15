'use strict';
/* Created by root on 17-7-12.*/
function number_map_to_word(collection){
  return collection.map(function (number) {
    return number=String.fromCharCode(96+number);
  });
}
module.exports = number_map_to_word;
