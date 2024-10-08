/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let open=0;
    let closed=0;
    let max=0;

    for(let i=0;i<s.length;i++){
        if(s[i]=='('){
            open++;
        }
        else if(s[i]==')'){
            closed++;
        }
        if(open-closed>max){
            max=open-closed
        }
    }
    return max;
};