/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
        else {
            map.set(nums[i], 1)
        }
    }
    const SortedMap = new Map([...map.entries()].sort((a, b) => a[1]!=b[1]? a[1] - b[1]: b[0]-a[0]));
    console.log(SortedMap)
    let j = 0;
    SortedMap.forEach((values, key) => {
        for (let i = 0; i < values; i++) {
            nums[j] = key;
            j++;
        }
    })
    return nums
};