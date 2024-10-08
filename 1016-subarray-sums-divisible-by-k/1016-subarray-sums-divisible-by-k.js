/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum = (sum + nums[i]) % k;
        if (sum < 0) {
            sum = sum + k;
        }
        if (map.has(sum)) {
            count = count + map.get(sum);
        }
            map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};