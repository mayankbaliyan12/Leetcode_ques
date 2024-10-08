/**
 * @param {string} s
 * @return {string}
 */

class Stack {
    constructor() {
        this.item = [];
    }
    push(element) {
        this.item.push(element);
    }
    pop() {
        this.item.pop();
    }
    top() {
        return this.item[this.item.length - 1];
    }
    get length() {
        return this.item.length;
    }
}
var decodeString = function (s) {
    let stack_num = new Stack();
    let stack_ele = new Stack();

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            let num = parseInt(s[i]);
            while (i + 1 < s.length && s[i + 1].charCodeAt(0) >= 48 && s[i + 1].charCodeAt(0) <= 57) {
                num = num * 10 + parseInt(s[i + 1]);
                i++;
            }
            stack_num.push(num);
        }
        else if (s[i] != ']') {
            stack_ele.push(s[i]);
        }
        else {
            let str = '';
            while (stack_ele.top() != "[") {
                str = stack_ele.top() + str;
                stack_ele.pop();
            }
            console.log({ str })
            stack_ele.pop()

            let res = '';

            for (let i = 0; i < stack_num.top(); i++) {
                res = res + str;
            }
            stack_ele.push(res);
            stack_num.pop();
        }

    }
    let result = '';
    console.log(stack_ele)
    while (stack_ele.length > 0) {
        result = stack_ele.top() + result;
        stack_ele.pop();
    }
    return result;
};