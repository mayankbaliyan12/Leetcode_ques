/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let map = new Map();
    let max = Math.max(...nums);
    console.log(max)
    for (let i=0;i<nums.length;i++) {
        map.set(nums[i] ,true)
    }
    console.log(map)
    for (let i = 1; i < max; i++) {
        console.log(String(i))
        if (!map.has(i)) {
            return i;
        }
    }
    if (max < 0) {
        return 1;
    } else {
        return max + 1;
    }
};