/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim();
    let len=s.length-1;
    let res=0;

    while(len>=0){
        if(s.charCodeAt(len)==32){
            return res;            
        }
        else{
            res++;
        }
        len--;
    }
return s.length;
};