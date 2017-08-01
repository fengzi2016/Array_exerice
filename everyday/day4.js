/**
 * Created by root on 17-7-20.
 */
function conCat(collectionA,collectionB) {
    return collectionA=collectionA.concat(collectionB);
}
function no_repeat(collection) {
    return collection.filter(function (value,index,collection) {
        return collection.indexOf(value)===index;
    });
}
function () {
    
}
let collectionA=[1,2,3];
let collectionB=[2,3,4,5];
let collection=conCat(collectionA,collectionB);
console.log(collection);
console.log(no_repeat(collection));



