'use strict';
function even_group_calculate_average (collection){
  let EvenIndexArr=collection.filter(function (number,tag,collection) {
    return tag%2!==0;
  });
  let EvenArr=EvenIndexArr.filter(function (number) {
    return number%2===0;
  });
  if(EvenArr.length>0){
    let EvenArr2=EvenArr.slice(0);
    let weishuArr=EvenArr2.map(function (number) {
      return String(number).length;
    });
    let sortWeishuArr=weishuArr.sort();
    let sumArr=[];
    let count=[];
    let averageArr;
    for(let i=1;i<=sortWeishuArr[sortWeishuArr.length-1];i++){
      count[i]=0;
      sumArr.push(EvenArr.reduce(function (accumulator,currentValue) {
        if(String(currentValue).length===i){
          count[i]++;
          return currentValue+accumulator;
        }else{
          return accumulator;
        }
      },0));
    }
    averageArr=sumArr.map(function (number,index) {
      return parseInt(number/count[index+1]);
    });
    return averageArr.filter(function (number) {
      return isNaN(number)===false;
    });
  }else{
    let result=[0];
    return result;
  }
}
