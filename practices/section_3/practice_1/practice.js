function create_updated_collection(collection_a, object_b) {
  let result=collection_a.map(function (number,tag,collection) {
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
      number.summary=number.summary-1;
    }
    return number;
  });
  return result;
}

module.exports = create_updated_collection;
