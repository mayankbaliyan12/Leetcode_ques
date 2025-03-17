/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
    }
    for (const count of freqMap.values()) {
        if (count % 2 !== 0) { return false; }
    }
    return true;    
};