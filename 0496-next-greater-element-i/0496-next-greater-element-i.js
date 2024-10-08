/**
 * @param {number[]} nums1
 * @param {number[]} nums2
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
        return this.items.pop();
    }
    top() {
        return this.items[this.items.length - 1];
    }
    get length() {
        return this.items.length;
    }
}

var nextGreaterElement = function (nums1, nums2) {
    let stack = new Stack();
    let map = new Map();
    let result = [];

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack.top()) {
            map.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i]);
    }

    while (stack.length > 0) {
        map.set(stack.pop(), -1);
    }

    for (let num of nums1) {
        result.push(map.get(num));
    }

    return result;
};

