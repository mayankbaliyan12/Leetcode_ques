/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let open = 0, closed = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '*') {
            open++;
        } else if (s[i] === ')') {
            open--;
        }

        if (open < 0) {
            return false;
        }
    }


    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')' || s[i] === '*') {
            closed++;
        } else if (s[i] === '(') {
            closed--;
        }

        if (closed < 0) {
            return false;
        }
    }

    return true;
};
