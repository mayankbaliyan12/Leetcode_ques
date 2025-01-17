/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 1;
    let end =num/2
       if( num ==0 || num ==1) return true
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);

        if(mid*mid ==num) {
            return true
        }

        if(mid*mid > num){
            end = mid-1
        }else{
            start = mid+1
        }
    }
    return false
};