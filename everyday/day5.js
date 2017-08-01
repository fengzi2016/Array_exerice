function first(collection,num=1) {
    return collection.filter(function (value,tag,collection) {
        return tag<num;
    });
}
console.log(first([7, 9, 0, -2]));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],-3));
function zhishu() {
    let all=[]
    for(let i=1;i<101;i++){
        for(var j=i-1;j>0;j--){
            if(i%j===0){break;}
        }
        if(j===1) {
            all.push(i);
        }
    }
    return all;
}
let all=zhishu();
console.log(all);
