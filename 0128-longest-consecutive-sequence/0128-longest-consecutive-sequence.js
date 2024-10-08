/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let n = nums.length;
    if (n == 0) {
        return 0;
    }
    let set = new Set();
    for (let i = 0; i < n; i++) {
        set.add(nums[i]);
    }
    let longest = 1;
    let ini;
    for (const value of set) {
        if (!set.has(value - 1)) {
            ini = value;
            let count = 1;
            while (set.has(ini + 1)) {
                count++;
                ini++;
            }
            longest = Math.max(longest, count)
        }
    }
    return longest;
};