/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = [];
    let j = 0;

    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i])
        while (j < popped.length && stack.length > 0 && stack[stack.length - 1] === popped[j]) {
            stack.pop(popped[j])
            j++;
        }
    }
    // console.log({ stack })
    // if (stack.length == 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return !stack.length;
};