'use strict';

function grouping_count(collection) {
  var temp=collection.filter(function (number,tag,collection) {
    return collection.indexOf(number)===tag;
  });
  var result={};
  for(var i=0,count=[];i<temp.length;i++){
    count.push(collection.filter(function (number) {
      return number===temp[i];
    }).length);
    result[temp[i]]=count[i];
  }
  return result;
}
module.exports = grouping_count;
