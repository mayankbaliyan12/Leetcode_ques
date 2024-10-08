/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    var result=""
    var temp=""

    for(let i=0;i<num.length;i++){
        temp=temp+num[i];
        if(num[i]%2==1){
            result=temp;
        }
    }
    return result;
};