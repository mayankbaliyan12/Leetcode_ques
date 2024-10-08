/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let low=0;
    let high=1;
    let count=1;
    while(high<nums.length){
        if(nums[low]==nums[high]){
            count++;
        }
        else{
            count=1;
        }
        if(count>2){
            nums.splice(high,1);
        }
        else{
            low++;
            high++;
        }
    }
};