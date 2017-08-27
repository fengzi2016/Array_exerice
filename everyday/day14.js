function same(str1,str2){
    let string1=str1.split(' ');
    let string2=str2.split(' ');
    let allArr=string1.concat(string2);
    let all=[];
    console.log(string1);
    console.log(string2);
    let result='';
    allArr.forEach(function (key) {
        let count=0;
        allArr.forEach(function (element) {
            if(element===key){
                count++;
            }
        });
        result=result+key+':'+count+'\n';
    });
    return result;
}
console.log(same("Google Bye GoodBye Hadoop code","lintcode code Bye"));
function fuhao(str) {
    let string=str.split('');
    let base=['(',')','[',']','{','}'];
    let flag=0;
    if((string.indexOf(base[1])-string.indexOf(base[0])-1)%2===0){
        flag++;
    }
    if((string.indexOf(base[3])-string.indexOf(base[2])-1)%2===0){
        flag++;
    }
    if((string.indexOf(base[5])-string.indexOf(base[4])-1)%2===0){
        flag++;
    }
    if(flag===3){
        return true;
    }
    return false;
}
let tre="([]{})";
let fla="([)]";
console.log(fuhao(tre));
console.log(fuhao(fla));