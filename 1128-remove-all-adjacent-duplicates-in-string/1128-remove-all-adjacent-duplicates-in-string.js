/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let output = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === output[output.length - 1]) {
            output.pop();
        } else {
            output.push(s[i]);
        }
    }
    
    return output.join('');
};