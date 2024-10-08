/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let n = nums.length;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1])
    console.log({sortedArray})
    const res=[];
    let j=0;
    for (let i=0;i<k;i++){
        res.push(sortedArray[j][0]);
        j++
    }
    return res;
};