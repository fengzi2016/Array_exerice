function collect_same_elements(collection_a, object_b) {
    return collection_a.reduce(function (accumulator,currentValue) {
      let itExist=0;
      for(let Bvalue of collection_b.value){
        if (Bvalue===currentValue){
          itExist=1;
        }
      }
      if(itExist===1){
        accumulator.push(currentValue);
        return accumulator;
      }else{
        return accumulator;
      }
    },[]);
}

module.exports = collect_same_elements;
