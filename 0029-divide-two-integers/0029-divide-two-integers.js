/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    let res=Math.trunc(dividend/divisor);
    if(res>Math.pow(2,31)-1){
        return Math.pow(2,31)-1
    }
    return res;
};