function count_same_elements(collection) {
  let Arr=collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
    let sameElementArr=collection.filter(function (number) {
      return number===currentValue;
    });
    if(accumulator.findIndex(function(object){return object.name===currentValue;})===-1){
      accumulator.push({name: currentValue,summary: sameElementArr.length});
      return accumulator;
    }else{
      return accumulator;
    }
  },[]);
  return Arr;
}
module.exports = count_same_elements;
