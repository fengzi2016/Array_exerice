function shuixianhua() {
    let re=[];
    for(let i=100;i<1000;i++){
        let result=i.toString().split("");
        let sum=result.reduce(function (accumulator,currentValue) {
           return Number(currentValue)*Number(currentValue)*Number(currentValue)+accumulator;

        },0);
        if(sum===i){
           re.push(i);
        }
    }
    return re;
}
console.log(shuixianhua());
function  find(collection) {
    let result;
    collection.forEach(function (value,index,collection) {
        if(collection.filter(function (value2) {
            return value===value2;
        }).length>parseInt(collection.length/2)){
            result=value;
        }
    });
    return result;
}
console.log(find([1,1,2]));