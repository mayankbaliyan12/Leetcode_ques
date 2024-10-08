/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let seen = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            let prevIndex = seen.get(nums[i]);
            if (i - prevIndex <= k) {
                return true;
            }
        }
        seen.set(nums[i], i);
    }
    
    return false;

};