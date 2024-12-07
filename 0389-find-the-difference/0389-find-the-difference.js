/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let res = 0;
    for (let char of t) {
        res += char.charCodeAt(0);
    }
    for (let char of s) {
        res -= char.charCodeAt(0);
    }
    return String.fromCharCode(res);
};
