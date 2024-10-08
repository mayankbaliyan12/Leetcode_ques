/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let start = 0
    let avg = -Infinity
    let sum = 0
    let j = 0
    for (let i = 0; i <= nums.length; i++) {
        sum += nums[i]
        if ((i - j) + 1 == k) {
            if (avg < sum / k)
                avg = sum / k
            sum -= nums[j]
            j++
        }
    }
    return avg
};