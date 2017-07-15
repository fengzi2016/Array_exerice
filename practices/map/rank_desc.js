'use strict';
function rank_desc(collection){
  return collection.sort(function (a,b) {
    return b-a;
  });
}
module.exports = rank_desc;
