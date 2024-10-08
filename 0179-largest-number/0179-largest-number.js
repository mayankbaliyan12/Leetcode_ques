/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    function mySort(numA,numB){
        let s1=numA.toString();
        let s2=numB.toString();

        if(s1+s2>s2+s1){
            return -1;
        }
        else if(s1+s2<s2+s1){
            return 1;
        }
        else{
            return 0;
        }
    }
    let res='';
    nums.sort(mySort)
    for(let i=0;i<nums.length;i++){
        res += nums[i];
    }
    if(nums[0]==0){
        return '0';
    }
    return res;
};