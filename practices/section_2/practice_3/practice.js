function count_same_elements(collection) {
  let Arr=collection.reduce(function (accumulator,currentValue,currentIndex,collection) {
    let sameElementArr=collection.filter(function (number) {
      return number===currentValue;
    });
    if(accumulator.findIndex(function(object){return object.name===currentValue;})===-1){
      if(currentValue.length===1){
        accumulator.push({name: currentValue,summary: sameElementArr.length});
        return accumulator;
      }else if(currentValue.indexOf('-')!==-1){
        accumulator.push({name:currentValue.split('-')[0],summary:Number(currentValue.split('-')[1])});
        return accumulator;
      }else if(currentValue.indexOf(':')!==-1){
        accumulator.push({name:currentValue.split(':')[0],summary:Number(currentValue.split(':')[1])});
        return accumulator;
      }else if(currentValue.indexOf('[')!==-1){
        accumulator.push({name:currentValue.substr(0,1),summary:Number(currentValue.substring(2,currentValue.length-1))});
        return accumulator;
      }
    }else{
      return accumulator;
    }
  },[]);
  let Result=Arr.reduce(function (accumulator,currentValue,currentIndex,collection) {
    if (accumulator.findIndex(function (object) {
        return object.name === currentValue.name;
      }) === -1) {
      accumulator.push(currentValue);
      return accumulator;
    } else {
      for (let value of accumulator) {
        if (value.name === currentValue.name) {
          value.summary = value.summary + currentValue.summary;
          break;
        }
      } return accumulator;
    }
  },[]);
  return Result;
}
module.exports = count_same_elements;
