'use strict';

function even_to_letter(collection) {
  let evenArr=collection.filter(function (number) {
    return number%2===0;
  });
  return evenArr.map(function (number) {
    return  String.fromCharCode(96+number);
  });
}
module.exports = even_to_letter;
