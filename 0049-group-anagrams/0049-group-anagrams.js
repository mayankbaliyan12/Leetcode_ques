/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map= new Map();
    for(let i=0;i<strs.length;i++){
        let sorted=strs[i].split("").sort().join("");
        if(map.has(sorted)){
            let arr=map.get(sorted)
            arr.push(strs[i])
            map.set(sorted,arr) 
        }
        else{
            map.set(sorted,[strs[i]]);
        }
    }

    // let result=Array.from(map.values())
    // console.log(result)
    // return result;
let result=[];
    map.forEach((value,key)=>{
        result.push(value)
    })
    return result;
};