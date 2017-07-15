'use strict';
function number_map_to_word_over_26(collection){
  var temp=[];
  var k=0;
  return collection.map(function (number) {
    let asc=number;
    var ascArr=[];
    while(asc!==0){
      temp[k]=parseInt(asc%26);
      ascArr.unshift(temp[k++]);
      asc=parseInt(asc/26);
    }
    let result=ascArr.map(function (number) {
      return String.fromCharCode(96+number);
    });
    let str='';
    for(let i=0;i<result.length;i++){
      str+=result[i];
    }
    return str;
  });
}
module.exports = number_map_to_word_over_26;
