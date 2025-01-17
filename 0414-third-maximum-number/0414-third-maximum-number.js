/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let sorted=[...new Set(nums)].sort((a,b)=>b-a)
    if(sorted.length>=3) return sorted[2]
    else return sorted[0]
};