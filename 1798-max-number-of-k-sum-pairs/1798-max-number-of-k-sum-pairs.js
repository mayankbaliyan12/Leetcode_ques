/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let n = nums.length;
    let op = 0;
    let low = 0;
    let high = n - 1;
    nums.sort((a, b) => a - b);
    while (low < high) {
        let sum = nums[low] + nums[high];
        if (sum === k) {
            op++;
            low++;
            high--;
        } else if (sum < k) {
            low++;
        } else {
            high--;
        }
    }
    return op;
};

