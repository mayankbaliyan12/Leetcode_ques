/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }

    let maxLucky = -1;

    for (let [num, count] of map) {
        if (num === count) {
            maxLucky = Math.max(maxLucky, num);
        }
    }

    return maxLucky;
};
