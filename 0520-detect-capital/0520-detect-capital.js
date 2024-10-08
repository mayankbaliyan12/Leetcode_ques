/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
            count++;
        }
    }
    if (count == 0 || count == word.length) {
        return true
    }

    if (count == 1 && word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
        return true
    }

    return false

};