/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const n=nums.length;
    let i=0;
    let j=0;
    let count=0;
    const map=new Map();

    while(j<n){
        if(map.has(nums[j])){
            map.set(nums[j], map.get(nums[j])+1)
        }
        else{
            map.set(nums[j],1);
        }
        while(map.get(nums[j])>k){
            // console.log(map.get(nums[j]))
              map.set(nums[i], map.get(nums[i])-1);
           i++;
        }
         if (j-i+1>count){
            count= j-i+1;
        }
        j++;
    }
    return count;

};