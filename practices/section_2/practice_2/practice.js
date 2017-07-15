function count_same_elements(collection) {
    let Arr=collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
      let sameElementArr=collection.filter(function (number) {
        return number===currentValue;
      });
      if(accumulator.findIndex(function(object){return object.name===currentValue;})===-1){
        if(currentValue.indexOf('-')===-1){
          accumulator.push({name: currentValue,summary: sameElementArr.length});
          return accumulator;
        }else{
          accumulator.push({name:currentValue.split('-')[0],summary:Number(currentValue.split('-')[1])});
          return accumulator;
        }

      }else{
        return accumulator;
      }
    },[]);
    return Arr;
}

module.exports = count_same_elements;
