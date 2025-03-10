var shiftGrid = function(g, k) {
    while(k>0){
        for(let i=0;i<g.length;i++){
            for(let j=g[0].length-1;j>0;j--){
                [g[i][j],g[i][j-1]]= [g[i][j-1],g[i][j]]
            }
        }
    
        for(let i=g.length-1;i>0;i--){
            [g[i][0],g[i-1][0]]= [g[i-1][0],g[i][0]]
        }
        k--
    }
    return g
    
};