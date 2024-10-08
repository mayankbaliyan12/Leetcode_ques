/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
    let n = nums.length;
    let ops = 0;
    nums.sort((a, b) => a - b);
    for (let i = n - 1; i > 0; i--) {
        if (nums[i] == nums[i - 1]) {
            continue;
        }
        ops = ops + (n - i);
    }
    return ops;
};