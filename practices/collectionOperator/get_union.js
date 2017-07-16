'use strict';


function get_union(collection_a, collection_b) {
  let unionArr=collection_a.concat(collection_b);
  return unionArr.filter(function(number,tag,collection){
    return collection.indexOf(number)===tag;
  });
}

module.exports = get_union;
