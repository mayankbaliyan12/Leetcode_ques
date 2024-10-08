/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let map = new Map();
    for (let i = 0; i < arr1.length; i++) {
        if (map.has(arr1[i])) {
            map.set(arr1[i], map.get(arr1[i]) + 1);
        } else {
            map.set(arr1[i], 1);
        }
    }
    console.log({ map })

    let res = [];

    for (let i = 0; i < arr2.length; i++) {
        if (map.has(arr2[i])) {
            let count = map.get(arr2[i])
            for (let j = 0; j < count; j++) {
                res.push(arr2[i]);
            }
            map.delete(arr2[i]);
        }
    }
    let res1 = [];
    for (let [key, value] of map) {
        // if (!res1.includes(key)) {
        //     res1.push(key);
        // }
        for (let i = 0; i < value; i++) {
            res1.push(key);
        }
    }
    res1.sort((a, b) => a - b);
    res = res.concat(res1);
    return res;
};