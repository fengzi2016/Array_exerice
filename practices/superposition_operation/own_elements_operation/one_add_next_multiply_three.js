function one_add_next_multiply_three(collection){
  return collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
    if(currentIndex!==collection.length-1){
      currentValue=(currentValue+collection[currentIndex+1])*3;
      accumulator.push(currentValue);
      return accumulator;
    }else{
      return accumulator;
    }
  },[]);
}
module.exports = one_add_next_multiply_three;
