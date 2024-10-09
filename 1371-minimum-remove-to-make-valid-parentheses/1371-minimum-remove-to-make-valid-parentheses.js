/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    s = s.split('');
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        }
        else if (s[i] === ")") {
            if (stack.length > 0) {
                stack.pop();
            }
            else s[i] = "";
        }
    }
    for (let i = 0; i < stack.length; i++) {
        s[stack[i]] = "";
    }
    return s.join('');
};