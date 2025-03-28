/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sums = 0;
    let retSums = [];

    for(let i = 0; i < nums.length; i++){
        sums=sums+nums[i];
        retSums.push(sums);
    }
    return retSums;
};