var generateParenthesis = function(n) {
    const stack = []
    const result = []
    
    const backtrack = (open, close) => {
        if(open == close && open == n){
            result.push(stack.join(''))
            return
        }
        if(open < n) {
            stack.push("(")
            backtrack(open + 1, close)
            stack.pop()
        }
        if(close < open){
            stack.push(")")
            backtrack(open, close + 1)
            stack.pop()
        }
    }
    
    backtrack(0, 0)
	
    return result
};