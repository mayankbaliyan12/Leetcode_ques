/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let n = nums.length;
    let i = 0;
    const map = new Map();
    while (i < n) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
        i++;
    }
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let idx = 0;
    for (let i = min; i <= max; i++) {
        while (map.get(i) > 0) {
            nums[idx++] = i;
            map.set(i, map.get(i) - 1);
        }
    }
    return nums;
};