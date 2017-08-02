/*
难度：简单

给定一个数字, 检测它是不是回文数。

回文数就是你对这个数进行逆序操作，得到的依旧是这个数


Example
11, 121, 1, 12321 are palindrome numbers.

23, 32, 1232 are not palindrome numbers.
*/

function huishu(num) {
    num=num.toString();
    let arr=num.split('');
    let same=arr.filter(function (value,index,collection) {
        return value===collection[0];
    });
    if(arr.length===1||same.length===arr.length){
        return true;
    }else if(arr.length%2!==0){
        let left=[];
        let right=[];
        let median=(arr.length+1)/2-1;
        for(let index in arr){
            if(index<median){
                left.push(arr[index]);
            }else if(index>median){
                right.unshift(arr[index]);
            }
        }
        console.log(median);
        console.log(left);
        console.log(right);
      let result= left.filter(function (value,index) {
           return right[index]===value;
       });
      if(result.length===right.length){
        return true;
      }
      return false;
    }
}
console.log(huishu(123));

function gouzhao(str) {
    let strArr=str.split('');
    let count=0;
    for(let value of strArr){
        if(strArr.indexOf(value)===strArr.lastIndexOf(value)&&count!==0){
            strArr.splice(value,1);
        }
        count++;
    }


}
