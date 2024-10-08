/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let n = nums.length;
    let i = 0, j = 0;
    let prod = 1;
    let count = 0;
    if(k==0 || k==1){
        return 0;
    }
    while (j < n) {
        prod = prod * nums[j];
        while (prod >= k) {
            prod=prod/nums[i];
            i++;
        }
        count = count + (j - i + 1);
        j++;
    }
    return count;
};