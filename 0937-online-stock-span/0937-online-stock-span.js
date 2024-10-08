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
        return this.items.length;
    }
}
var StockSpanner = function () {
    this.index = 0;
    this.stack = new Stack([]);
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    // let i = 0;
    let res = this.index+1;
    // let stack = new Stack([]);
    while (this.stack.length > 0 && this.stack.top().price <= price) {
        this.stack.pop();
    }
    if (this.stack.length > 0 && this.stack.top().price > price) {
        res = this.index - this.stack.top().index;
    }
    // i++;
    this.stack.push({ price: price, index: this.index });
    this.index = this.index + 1;
    return res;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */