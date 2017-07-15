'use strict';

function compute_median(collection) {
  let arrSort=collection.sort(function (a,b) {
    return a-b;
  });
  return arrSort.reduce(function(accumulator,currentValue,currentIndex,collection){
    if(collection.length%2===0){
      let medianTag=parseInt(collection.length/2-1);
      if(currentIndex===medianTag||currentIndex===medianTag+1) {
        return accumulator + currentValue/2;
      }else {
        return accumulator+0;
      }
    }else{
      let medianTag=parseInt((collection.length+1)/2-1);
      if(currentIndex===medianTag){
        return accumulator+currentValue;
      }else{
        return accumulator+0;
      }
    }
  },0);
}

module.exports = compute_median;


