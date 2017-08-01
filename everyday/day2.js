/**
 * Created by root on 17-7-17.
 */
function factor(number) {
    let result=[1];
    while(result[result.length-1]<number){
        result.push(result.reduce(function (accumulator,currentValue,currentIndex,collection) {
            return collection[collection.length-1]+1;
        },1));
    }
    return result.filter(function (inNumber) {
        return number%inNumber===0;
    });
}
console.log(factor(35));
