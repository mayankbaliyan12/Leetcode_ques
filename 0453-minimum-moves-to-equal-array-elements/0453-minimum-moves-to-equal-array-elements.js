/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let count=0;
    nums.sort((a, b) => a - b);

    for(let i=0;i<nums.length;i++){
        count=count+nums[i]-nums[0];
    }
    return count;
};