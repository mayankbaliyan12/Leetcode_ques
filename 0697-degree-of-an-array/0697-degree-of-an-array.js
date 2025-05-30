/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = (nums) => {
    const counts = {}
    const firstIndexes = {}
    const lastIndexes = {}
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        const k = nums[i]
        counts[k] = (counts[k] || 0) + 1
        max = Math.max(max, counts[k])
        if (firstIndexes[k] === undefined) {
            firstIndexes[k] = i
        }
        lastIndexes[k] = i
    }
    let res = nums.length
    for (const k in counts) {
        if (counts[k] === max) {
            res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1)
        }
    }
    return res
};