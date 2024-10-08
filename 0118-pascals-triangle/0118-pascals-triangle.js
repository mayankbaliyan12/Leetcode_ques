/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    let arr = [];
    if (numRows == 1) {
        return [[1]];
    }
    if (numRows == 2) {
        return [[1],[1,1]];
    }
    arr.push([1],[1,1]);
    for (let i = 2; i < numRows; i++) {
        // arr.push([1],[arr[i-1]+arr[i-1]],[1]);
        // let sum=arr[i-1]+arr[i-1];
        // arr.push(arr[0],sum,arr[0]);
        // console.log(arr);
        const temp=[]
        temp.push(1);
        for(let j=0;j<arr[i-1].length-1;j++){
            temp.push(arr[i-1][j]+  arr[i-1][j+1])

        }
        temp.push(1)
        arr.push(temp)
    }
    return arr;
};