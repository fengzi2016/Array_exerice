'use strict';

function median_to_letter(collection) {
  let sortArr=collection.sort(function (a,b) {
    return a-b;
  });
  let median;
  if(sortArr.length%2===0){
    let medianTag=sortArr.length/2-1;
    let sum=sortArr[medianTag]+sortArr[medianTag+1];
    median=Math.round(sum/2);
  }else{
    median=sortArr[(sortArr.length+1)/2-1];
  }
  let ascArr=[];
  let temp=[];
  let k=0;
  while(median!==0){
    temp[k]=parseInt(median%26);
    ascArr.unshift(temp[k++]);
    median=parseInt(median/26);
  }
  let result=ascArr.map(function (number) {
    return String.fromCharCode(96+number);
  });
  let str='';
  for(let i=0;i<result.length;i++){
    str+=result[i];
  }
  return str;
}
module.exports = median_to_letter;
