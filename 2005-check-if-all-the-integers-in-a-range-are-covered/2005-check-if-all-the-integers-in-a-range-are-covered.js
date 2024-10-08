/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    for (let i = left; i <= right; i++) {
        let flag = 0;
        for (let j = 0; j < ranges.length; j++) {
            if (ranges[j][0] <= i && ranges[j][1] >= i) {
                flag = 1;
                break;
            }
        }
        if (!flag) return false;
    }
    return true;
};