/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const n = nums.length;
    const ActualSum = n * (n + 1) / 2; // 1+2+3+4=10
    const set = new Set(nums); // 1,2,4
    const setSum = [...set].reduce((a, b) => a + b, 0); //1+2+4=7
    const numSum = nums.reduce((a, b) => a + b, 0); // 1+2+2+4=9

    const duplicate = numSum - setSum; //9-7=2
    const missing = ActualSum - setSum; //10-7=3
    return [duplicate, missing];
};