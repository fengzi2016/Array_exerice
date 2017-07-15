'use strict';
function  map_to_four_multiples_add_one(collection){
  return collection.map(function (number) {
    return number*4+1;
  })
}
module.exports = map_to_four_multiples_add_one;
