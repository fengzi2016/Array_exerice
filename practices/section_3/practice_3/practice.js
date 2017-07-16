function create_updated_collection(collection_a, object_b) {
  let Arr=collection_a.reduce(function (accumulator,currentValue,currentIndex,collection) {
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
  let result=Arr.map(function (number,tag,collection) {
    let exist= collection.filter(function (number1) {
      for(let value of object_b.value){
        if(value === number1.name){
          return true;
        }
      }return false;
    });
    if(exist.findIndex(function (number2) {
        return number2.name===number.name;
      })!==-1){
      let down=parseInt(number.summary/3);
      number.summary=parseInt(number.summary-down);
      return number;
    }
    return number;
  });
  return result;
}

module.exports = create_updated_collection;
