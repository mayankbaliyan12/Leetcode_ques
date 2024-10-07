/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reversed = 0;

    let neg = false;
    if (x < 0) {
        x = x * -1;
        neg = true;
    }
    while (x !== 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.trunc(x / 10);
        if (reversed > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    if (neg == true) {
        reversed = reversed * (-1);
    }
    return reversed;
};