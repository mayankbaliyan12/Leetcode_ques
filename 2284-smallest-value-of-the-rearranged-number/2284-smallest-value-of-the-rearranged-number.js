/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function (num) {
    let digits = num.toString().split('');
    num > 0
        ? digits.sort((a, b) => parseInt(a) - parseInt(b))
        : digits.sort((a, b) => parseInt(b) - parseInt(a));
    for (let i = 0; i < digits.length; i++) {
        if (parseInt(digits[i]) != 0) {
            [digits[0], digits[i]] = [digits[i], digits[0]];
            break;
        }
    }
    return Number(digits.join(''));
};