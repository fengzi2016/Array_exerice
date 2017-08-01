/**
 * Created by root on 17-7-19.
 */
function flaten(collectionA,collectionB) {
    let result;
    result=collectionB.toString();
    result=result.split(',');
       result=result.map(function (t) { return Number(t); })
       result=result.concat(collectionA);
       return result.filter(function (value,tag,collection) {
           return collection.indexOf(value)===collection.lastIndexOf(value);
       });
    return result.map(function (t) { return String(t); });
}

console.log(flaten([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(flaten([1, 2, 3], [100, 2, 1, 10]));