/*难度：容易
要求：写一个程序来检测一个整数是不是丑数
丑数的定义是，只包含质因子 2, 3, 5 的正整数。比如 6, 8 就是丑数，但是 14 不是丑数以为他包含了质因子 7。（可以认为 1 是一个特殊的丑数。）
样例：
给出 num = 8，返回 true。
给出 num = 14，返回 false。


难度：中等
要求：找出第n大的丑数（丑数的定义见上题）
设计一个算法，找出只含素因子2，3，5 的第 n 大的数。
符合条件的数如：1, 2, 3, 4, 5, 6, 8, 9, 10, 12…
样例
如果n = 9， 返回 10*/



function filter(number){
    let flag=0;
    for(let i=2;i<number;i++) {
        if (number % i === 0) {
            let shang =number/i;
            if (shang%2!==0&&shang%3!==0&&shang%5!==0) {
                flag = 1;
                break;
            }
        }
    }
    if(flag===0){
        return true;
    }else{
        return false;
    }
}
function fil(n){
    let all=[1];
    for(let i=2;i<1000;i++){
        let flag=0;
        for(let j=i-1;j>0;j--){
            if(i%j===0){
                let shang=i/j;
                if (shang%2!==0&&shang%3!==0&&shang%5!==0) {
                    flag = 1;
                    break;
            }
        }

    }if(flag===0) {
            all.push(i);
        }

    }
    return all[n-1];
}
console.log(filter(8));
console.log(filter(14));
console.log(fil(9));
