/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let oldArr = [...arr];
    arr.sort((a, b) => a - b);
    let res = [];
    let map = new Map();
    let rank = 1;
    
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], rank);
            rank++;
        }
    }

    for (let i = 0; i < oldArr.length; i++) {
        res.push(map.get(oldArr[i]));
    }

    return res;
};
