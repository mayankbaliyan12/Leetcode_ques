/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    if (n === 1) {
        return 0;
    } else if (nums[0] > nums[1]) {
        return 0;
    } else if (nums[n - 1] > nums[n - 2]) {
        return n - 1;
    }

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if ((mid === 0 || nums[mid] > nums[mid - 1]) &&
            (mid === n - 1 || nums[mid] > nums[mid + 1])) {
            return mid;
        } else if (mid > 0 && nums[mid] > nums[mid - 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return -1;
};
