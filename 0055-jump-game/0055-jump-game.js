/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n=nums.length;
    let maxIdx=0;

    for(let i=0;i<n;i++){
        if(i>maxIdx){
            return false;
        }
        maxIdx=Math.max(maxIdx,i+nums[i])
    }
    return true;
};