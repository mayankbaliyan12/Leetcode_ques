/**
 * @param {string} s
 * @return {boolean}
 */

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
}
var isValid = function (s) {
    let stack = new Stack();
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push('(');
        }
        else if (s[i] == '{') {
            stack.push('{');
        }
        else if (s[i] == '[') {
            stack.push('[');
        }
        else if (s[i] == ')') {
            if (stack.pop() !== '(') return false;
        }
        else if (s[i] == '}') {
            if (stack.pop() !== '{') return false;
        }
        else if (s[i] == ']') {
            if (stack.pop() !== '[') return false;
        }

    }
    return stack.items.length === 0;
};