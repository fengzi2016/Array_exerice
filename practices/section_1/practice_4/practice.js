function collect_same_elements(collection_a, collection_b) {
  return collection_a.reduce(function (accumulator,currentValue) {
    let itExist=0;
    for(let Bvalue of collection_b.value){
      if (Bvalue===currentValue.name){
        itExist=1;
      }
    }
    if(itExist===1){
      accumulator.push(currentValue.name);
      return accumulator;
    }else{
      return accumulator;
    }
  },[]);
}
module.exports = collect_same_elements;
