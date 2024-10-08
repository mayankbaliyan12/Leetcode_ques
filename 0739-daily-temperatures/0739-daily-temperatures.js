/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        this.items.pop();
    }
    top() {
        return this.items[this.items.length - 1];
    }
    get length() {
        return this.items.length
    }
}
var dailyTemperatures = function (temperatures) {
    let stack = new Stack();
    console.log(stack)

    let result = new Array(temperatures.length).fill(0);
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length > 0 && temperatures[stack.top()] <= temperatures[i]) {
            stack.pop();
        }
        if (stack.length > 0 && temperatures[stack.top()] > temperatures[i]) {
            result[i] = stack.top()-i;
        }
        // if (stack.length == 0) {
        //     result[i] = 0;
        // }
        stack.push(i);
    }
    return result;
};