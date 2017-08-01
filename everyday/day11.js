/*
难度：简单
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
给定一个非负的整数，重复的相加它的每一位，直到它的相加结果为一位数

Example
Given num = 38.
The process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return 2.


难度：中等
Giving a string with number from 1-n in random order, but miss 1 number.Find that number.
给定一个字符串和一个大于1的随机整数n，字符串是由1-n中的数字组成，但是字符串漏掉了一个数，找到那个数并打印出来。

Example
Given n = 20, str = 19201234567891011121314151618
return 17

Given n = 20, str = 19201234567891011171314151618
return 12*/
function flat(num) {
    num=num.toString();
    let Arr=num.split("");
    let sum;
    while( Arr.length>1){
        sum= Arr.reduce(function (accumulator,value) {
           return accumulator+Number(value);
        },0);
        sum=sum.toString();
        Arr=sum.split('');
    }
    return sum;
}
function good(num,str) {
    let strArr = str.split('');
    let numArr = num.split('');
    let j, t = 0;
    let temp = [];
    let sum = [];
    for (let i = 0; i < strArr.length; i = i + numArr.length) {
        j = i + numArr.length;
        sum[t] = '';
        for (let k = i; k < j; k++) {
            sum[t] = sum[t] + strArr[k];
        }
        if (Number(num) >= Number(sum[t])) {
            if (temp.indexOf(sum[t]) === -1) {
                temp.push(sum[t]);
            } else {
                temp.push(strArr[i]);
                i=i-1;
            }

        } else {
            temp.push(strArr[i]);
            i=i-1;
        }
        t++;
    }
    let all=[];
    for(let shu=1;shu<=num;shu++){
        all.push(String(shu));
    }
    let result=all.filter(function (value) {
        return temp.indexOf(value)===-1;
    });
    return result[0];
}
console.log(good('20','19201234567891011121314151618'));
