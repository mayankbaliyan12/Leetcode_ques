/**
 * @param {number[]} nums
 * @return {number}
 */
function countCompleteSubarrays(nums) {
    const total = new Set(nums);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const sub = new Set();
        for (let j = i; j < nums.length; j++) {
            sub.add(nums[j]);
            if (sub.size === total.size) count++;
        }
    }
    return count;
}