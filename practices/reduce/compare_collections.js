'use strict';

function compare_collections(collection_a, collection_b) {
  let a= collection_a.reduce(function (collectionA,number) {
    return collectionA+number.toString();
  },'');
  let b=collection_b.reduce(function (collectionB,number) {
    return collectionB+number.toString();
  },'');
  if(a===b){
    return true;
  }else{
    return false;
  }
}
module.exports = compare_collections;


