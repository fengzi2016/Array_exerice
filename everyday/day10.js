
/*难度：简单
写一个算法来判断一个数是不是"快乐数"。
一个数是不是快乐是这么定义的：对于一个正整数，每一次将该数替换为他每个位置上的数字的平方和，然后重复这个过程直到这个数变为1，或是无限循环但始终变不到1。如果可以变为1，那么这个数就是快乐数。
19 就是一个快乐数。
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

难度：中等

计算a^n % b，其中a，b和n都是32位的整数。(a的n次方对b取余)

样例
例如 2^31 % 3 = 2

例如 100^1000 % 1000 = 0*/

function happyNum(num) {
    let arr=[];
    while(num.toString().length>1) {
        num = num.toString();
        arr = num.split('');
        num = arr.reduce(function (accumulator, value) {
            return accumulator + value * value;
        }, 0);
    }
    return num===1?true:false;
}
function yu(a,n,b) {
    let sum=1;
    let yushu=a*a%b;
    for(let i=0;i<n/2;i++){
        sum=yushu*sum;
    }
    return sum;
}
console.log(happyNum(18));
console.log(yu(100,1000,1000));
console.log(yu())
