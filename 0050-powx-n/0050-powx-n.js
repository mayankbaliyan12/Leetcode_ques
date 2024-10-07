/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function output(x, n) {
    if (n === 0) return 1;
    if (n % 2 == 1) {
        return output(x, n - 1) * x;
    }
    else {
        var value=output(x, n / 2)
        return value*value;
        // return output(x, n / 2) * output(x, n / 2);
    }
}
var myPow = function (x, n) {

    if (n === 0) return 1;
    if (n < 0) {
        // x = 1 / x;
        n = -n;
        return 1 / output(x, n);
    }
    // for (let i = 0; i < n; i++) {
    //     result = result * x;
    // }
    console.log(output(x, n));
    return output(x, n)

};