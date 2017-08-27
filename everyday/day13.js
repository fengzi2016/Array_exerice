function twoSum(arr,target){
    let first,second,flag=0;
    for(let value of arr){
        for(let ele of arr){
            if(ele+value===target&&ele!==value){
                first=value;
                second=ele;
                flag=1;
                break;
            }
        }
        if(flag===1){
            break;
        }
    }
    let result=[];
    result.push(arr.indexOf(first)+1);
    result.push(arr.indexOf(second)+1);
    return result;
}
console.log(twoSum([2,7,11,15],9));
function change(str) {
    let string=str.split('');
    let base=['I','V','X','L','C','D','M'];
    let sum=[0,0,0,0,0,0,0];
    string.forEach(function(element) {
        switch (element){
            case base[0]:sum[0]=sum[0]+1;break;
            case base[1]:sum[1]=sum[1]+5;break;
            case base[2]:sum[2]=sum[2]+10;break;
            case base[3]:sum[3]=sum[3]+50;break;
            case base[4]:sum[4]=sum[4]+100;break;
            case base[5]:sum[5]=sum[5]+500;break;
            case base[6]:sum[6]=sum[6]+1000;break;
        }
    });
    let allSum;
    if(base.indexOf(string[0])>=base.indexOf(string[string.length-1])){
        allSum=sum.reduce(function(accumulator,number){
            accumulator=accumulator+number;
            return accumulator;
        },0);
    }else{
        sum=sum.filter(function (value) {
            return value!==0;
        });
        allSum=sum.reduce(function(accumulator,number,index,collection){
            if(index<collection.length-1){
                accumulator=accumulator+number;
                return accumulator;
            }else{
                accumulator=parseInt(accumulator-number);
                return -accumulator;
            }
        },0);
    }
    return allSum;
}
console.log(change('VIILLM'));