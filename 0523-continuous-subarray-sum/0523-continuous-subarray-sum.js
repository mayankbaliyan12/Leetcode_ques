/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let map = new Map();
    map.set(0,-1)
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        let res = sum % k;

        if (map.has(res)) {
            const len = map.get(res)
            if (i - len >= 2) {
                return true;
            }
        }
        else {
            map.set(res, i);
        }
    }
    return false;
};