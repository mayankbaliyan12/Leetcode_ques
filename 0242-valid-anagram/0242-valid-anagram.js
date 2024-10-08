/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map();
    for(let c of s){
        map.set(c, (map.get(c) | 0) + 1);
    }
    for(let d of t){
        if(map.has(d)){
            map.set(d, map.get(d)-1);
            if(map.get(d) === 0){
                map.delete(d)
            }
        } else {
            return false;
        }
    }
    if(map.size === 0) return true;
    else return false;
};