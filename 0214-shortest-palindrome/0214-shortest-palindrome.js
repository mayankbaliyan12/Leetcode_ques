/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    // Reverse the input string
    const palindromeStr = s.split("").reverse().join("");
    
    // If the string is already a palindrome, return it as is
    if (s === palindromeStr) {
        return s;
    }
    
    // Iterate through the string and compare the prefix with the reversed string
    for (let i = 0; i < s.length; i++) {
        // Check if the substring from the start matches the corresponding suffix in the reverse
        if (s.substring(0, s.length - i) === palindromeStr.substring(i)) {
            // Return the reversed part + the original string
            return palindromeStr.substring(0, i) + s;
        }
    }

    return "";
};