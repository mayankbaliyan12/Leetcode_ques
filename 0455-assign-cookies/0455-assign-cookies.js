/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let count = 0;
    let lft=0;
    let rt=0;
    
    let n=g.length;
    let m=s.length;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    while(lft<m && rt<n){
        if(g[rt]<=s[lft]){
            rt++;
            count++;
        }
        lft++;
    }
    return count;

};