

/*难度：容易
要求：
Write a JavaScript function to generate an array between two integers of 1 step length.

    Test Data :
    console.log(rangeBetwee(4, 7));
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
难度：中等
要求：
Write a JavaScript program to compute the union of two arrays.

    Sample Data :
    console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]*/
function un(collectionA,collectionB) {
    let result=collectionA.concat(collectionB);
    return result.filter(function (number,tag,collection) {
        return collection.indexOf(number)===tag;
    });
}
function step(a,b) {
    let arr=[];
    for (let i=a;i<=b;i++){
        arr.push(i);
    }
}
