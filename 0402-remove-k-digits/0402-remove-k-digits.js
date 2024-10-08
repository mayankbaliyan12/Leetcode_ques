/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
class Stack{
    constructor(){
        this.item = [];
    }
    push(element){
        this.item.push(element);
    }
    pop(){
        this.item.pop();
    }
    top(){
        return this.item[this.item.length - 1]
    }
    get length(){
        return this.item.length;
    }
}

var removeKdigits = function (num, k) {
    if(k==num.length){
        return '0';
    }
    let res='';
    let stack=new Stack();

    for(let i=0;i<num.length;i++){
        while(stack.length>0 && stack.top()>num[i] && k>0){
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while(k>0){
        stack.pop();
        k--;    }
    while(stack.length>0){
        res=stack.top()+res;
        stack.pop();
    }
    if(res=='0'){
        return res;
    }
    while(res[0]=='0'){
        res=res.slice(1);
        if(res=='0'){
            return res;
        }
    }
    return res;
};