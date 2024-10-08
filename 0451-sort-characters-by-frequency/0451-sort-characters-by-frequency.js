/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let j=0;
    let n=s.length;
    const map=new Map();
    while(j<n){
        if(map.has(s[j])){
            map.set(s[j],map.get(s[j])+1);
        }
        else{
            map.set(s[j],1);
        }
        j++;
    }
    const arr=Array.from(map.entries());
    arr.sort((a,b)=>b[1]-a[1])

    let res='';
    let l=arr.length;

    for(let i=0;i<l;i++){
        for(let j=0;j<arr[i][1];j++){
            res=res+arr[i][0];
        }
    }
    return res;
};