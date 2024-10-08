/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let count = 0;
    let map = new Map();
    let currentSum = 0;

    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        if (map.has(currentSum - goal)) {
            count = count + map.get(currentSum - goal);
            console.log( map.get(currentSum - goal))
        }

        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }

    return count;
};
