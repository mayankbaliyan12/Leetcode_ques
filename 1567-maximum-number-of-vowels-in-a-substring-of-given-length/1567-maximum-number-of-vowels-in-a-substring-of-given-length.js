/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const n=s.length;
    let count=0;
    let maxCount=0;
    let map= new Map();
    let i=0;
    let j=k;

    map.set('a',0);
    map.set('e',1);
    map.set('i',2);
    map.set('o',3);
    map.set('u',4);

    for(let i=0;i<k;i++){
        if(map.has(s[i])){
            count++;
            maxCount=Math.max(maxCount,count);
        }
    }
    while(j<n){
        if(map.has(s[i])){
            count--;
            maxCount=Math.max(maxCount,count);
        }
        if(map.has(s[j])){
            count++;
            maxCount=Math.max(maxCount,count);
        }
        i++;
        j++;
    }
    return maxCount;
};