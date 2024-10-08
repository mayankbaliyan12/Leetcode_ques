/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(arr, start, end) {
    while (start <= end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
var validPalindrome = function (s) {
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
        if (s[start] !== s[end]) {
            const res =isPalindrome(s, start + 1, end)|| isPalindrome(s, start, end - 1);
            return res;
        }
        start++;
        end--;
    }
    return true;
};