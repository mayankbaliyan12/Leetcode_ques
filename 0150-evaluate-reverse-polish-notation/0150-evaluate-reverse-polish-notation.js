/**
 * @param {string[]} tokens
 * @return {number}
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
    top() {
        return this.items[this.items.length - 1];
    }
    get length() {
        return this.items.length;
    }
}

var evalRPN = function (tokens) {
    let stack = new Stack();

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (!isNaN(token)) {
            stack.push(parseInt(token));
        }
        else {
            let a = stack.pop();
            let b = stack.pop();
            switch (token) {
                case "+":
                    stack.push(b + a);
                    break;
                case "-":
                    stack.push(b - a);
                    break;
                case "*":
                    stack.push(b * a);
                    break;
                case "/":
                    stack.push(Math.trunc(b / a));
                    break;
            }
        }
    }
    return stack.top();
};

