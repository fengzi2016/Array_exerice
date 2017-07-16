'use strict';
function even_asc_odd_desc(collection){
  let evenArr=collection.filter(function (number) {
    return number%2===0;
  });
  let oddArr=collection.filter(function (number) {
    return number%2!==0;
  });
  let sortEvenArr=evenArr.sort(function (a,b) {
    return a-b;
  });
  let sortOddArr=oddArr.sort(function (a,b) {
    return b-a;
  });
  let result=sortEvenArr.concat(sortOddArr);
  return result;
}
module.exports = even_asc_odd_desc;
