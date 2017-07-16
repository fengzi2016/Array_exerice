'use strict';
function calculate_median (collection){
  let median;
  let evenArr=collection.filter(function (currentValue,currentIndex,collection) {
    return currentIndex%2!==0;
  });
  let sortArr=evenArr.sort(function (a,b) {
    return a-b;
  });
  if(sortArr.length%2===0){
    let medianTag=parseInt(sortArr.length/2-1);
    let sum=sortArr[medianTag]+sortArr[medianTag+1];
    median=Math.round(sum/2);
  }else{
    let medianTag=parseInt((sortArr.length+1)/2-1);
    median=sortArr[medianTag];
  }
  return median;
}
module.exports = calculate_median;
