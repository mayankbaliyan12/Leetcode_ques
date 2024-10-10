/**
 * @param {number[]} nums
 * @return {number}
 */
function maxWidthRamp(nums) {
    const n = nums.length;
    const rightMax = new Array(n);
    rightMax[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    }

    let ramp = 0;
    let i = 0, j = 0;

    while (j < n) {
        while (i < j && nums[i] > rightMax[j]) {
            i++;
        }
        ramp = Math.max(ramp, j - i);
        j++;
    }

    return ramp;
}
