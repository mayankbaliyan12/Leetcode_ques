/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    if (s.length & 1) return false;

    let open = 0;
    let closed = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || locked[i] == "0") {
            open++;
        }
        else {
            closed++;
        }
        if (open - closed < 0) {
            return false;
        }
    }
    open = closed = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == ')' || locked[i] == "0") {
            closed++;
        }
        else {
            open++;
        }
        if (closed - open < 0) {
            return false;
        }
    }
    return true;
};