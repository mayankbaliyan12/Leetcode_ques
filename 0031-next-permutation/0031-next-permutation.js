/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let dip = -1;
    for (let i = nums.length - 1; i >=0; i--) {
        if (nums[i] < nums[i + 1]) {
            dip = i;
            break;
        }
    }
    console.log({dip})
    if(dip==-1){
        return nums.reverse();
    }
    else{
        for(let i=nums.length-1;i>0;i--){
            if(nums[i]>nums[dip]){
                [nums[i],nums[dip]]=[nums[dip],nums[i]];
                break;
            }
        }
    }
    console.log(nums)
    let n=nums.slice(dip).reverse();
    let j=0;
    for(let i=dip+1;i<nums.length;i++){
        nums[i]=n[j];
        j++;
    }
};