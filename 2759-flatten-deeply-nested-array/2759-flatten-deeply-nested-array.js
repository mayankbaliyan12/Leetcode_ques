/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

const flatternArray = (arr) => {
    const ans = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            ans.push(...item);
        }
        else {
            ans.push(item);
        }
    }
    return ans;
}

var flat = function (arr, n) {
    while (n--) {
        arr = flatternArray(arr);
    }
    return arr;
};