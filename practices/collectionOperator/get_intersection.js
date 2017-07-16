'use strict';


function get_intersection(collection_a, collection_b) {
  return collection_b.filter(function (number) {
    for(let value of collection_a){
      if(value===number){
        return true;
      }
    }
    return false;
  });
}

module.exports = get_intersection;
