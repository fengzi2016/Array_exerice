function rank_by_two_large_one_small(collection){
  let sortArr=collection.sort(function (a,b) {
    return a-b;
  });
  let lessArr=sortArr.reduce(function (accumulator,currentValue,currentIndex,collection){
    if(collection.length-currentIndex>1){
      if (currentIndex % 3 === 0 && currentIndex !== 0) {
        accumulator.push(collection[currentIndex - 3]);
        return accumulator;
      } else if (currentIndex === 0) {
        return accumulator;
      }else{
        accumulator.push(currentValue);
        return accumulator;
      }
    }else{
      return accumulator;
    }
  },[]);
  let miss=sortArr.length-lessArr.length;
  let len=lessArr.length;
  for(let i=0;i<miss;i++){
    lessArr.push(sortArr[len+i]);
  }
  return lessArr;
}

module.exports = rank_by_two_large_one_small;
