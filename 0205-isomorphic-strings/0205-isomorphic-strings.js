/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // if(s==t){
    //     return true;
    // }  
    const map_s=new Map();
    const map_t=new Map();

    for(let i=0;i<s.length;i++){
        if(map_s.has(s[i]) && map_s.get(s[i])!=t[i] ||
        map_t.has(t[i])&& map_t.get(t[i])!=s[i]){
            return false;
        }
        map_s.set(s[i],t[i]);
        map_t.set(t[i],s[i])
    }
    // console.log(map_s)
    // console.log(map_t)
    return true;
};