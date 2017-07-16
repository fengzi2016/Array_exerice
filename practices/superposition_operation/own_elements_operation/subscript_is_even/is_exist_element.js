'use strict';
function is_exist_element (collection,element){
  collection=collection.filter(function (number,index) {
    return index%2===0;
  });
  return (collection.findIndex(function (number) {
    return number===element;
  })!==-1);
}
module.exports = is_exist_element;
