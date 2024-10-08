/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let low = 0;
    let high = x;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const square = mid * mid;
        if (square <= x) low = mid + 1;
        else high = mid - 1;
    }
    return high;
};