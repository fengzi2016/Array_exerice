

/*简单：
给定一个字符串(string)和一个偏移量(offset)，根据偏移量旋转字符串(从左向右旋转)

样例：
对于字符串 "abcdefg".
    offset=0 => "abcdefg"
offset=1 => "gabcdef"
offset=2 => "fgabcde"
offset=3 => "efgabcd"
中等:
    给出一组非负整数，重新排列他们的顺序把他们组成一个最大的整数。

样例：
给出 [1, 20, 23, 4, 8]，返回组合最大的整数应为8423201。*/
function change(strings,offset){
    let len=strings.length;
    let string=strings.split('');
    let loseArr=string.splice(len-offset,offset);
    let result=loseArr.concat(string);
    let re='';
    let all=result.reduce(function (accumulator,value) {
        return accumulator+value;
    },re);
    return all;

}
console.log(change('abcdefg',2));
function select(collection) {
    let strings = collection.reduce(function (accumulator, value) {
        return String(value) + accumulator;
    }, '');
    let all = strings.split('');
    all.sort(function (a,b) {
        return a-b;
    });
   let re= all.reduce(function (accumulator,value) {
        return value+accumulator;
    },'');
   re=Number(re);
    return re;
}
console.log(select([1,20,23,4,8]));
