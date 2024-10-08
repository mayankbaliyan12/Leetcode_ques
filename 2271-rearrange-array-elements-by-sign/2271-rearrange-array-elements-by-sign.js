/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pos=0;
    let neg=1;
    const res= Array(nums.length).fill(-1)

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            res[pos]=nums[i];
            pos=pos+2;
        }
        else{
            res[neg]=nums[i];
            neg=neg+2;
        }
    }
    return res;
};