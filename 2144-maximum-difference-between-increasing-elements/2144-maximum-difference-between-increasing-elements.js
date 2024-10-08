/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {

    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                diff = nums[j] - nums[i];
                if (diff > num) {
                    num = diff;
                }
            }
        }
    }
    return num || -1;
};