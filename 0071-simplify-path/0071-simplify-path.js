/**
 * @param {string} path
 * @return {string}
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
        return this.items(this.items.length - 1);
    }
    get length() {
        return this.items.length;
    }
}
var simplifyPath = function (path) {
    let stack = new Stack();
    const res=path.split("/");
    for(let i=0;i<res.length;i++){
        if(res[i]==='..'){
            if(stack.length>0){
                stack.pop();
            }
        }
        else if(res[i]==='.' || res[i]===''){
            continue;
        }
        else{
            stack.push(res[i]);
        }
    }
    return "/" + stack.items.join("/");
};