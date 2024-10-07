/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const table= {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let val=0
    for(let i=0;i<s.length;i++){
       
        if(table[s[i]]<table[s[i+1]]){
            val-=table[s[i]]
        }else{
            val+=table[s[i]]
        }
    }
    return val
};