/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums)
    let pairs = [];
    let low = 0;
    let high = nums.length - 1;
    let res;
    while (low < high) {
        pairs.push([nums[low]+nums[high]]);
        low++;
        high--;
    }
    return Math.max(...pairs);
};
