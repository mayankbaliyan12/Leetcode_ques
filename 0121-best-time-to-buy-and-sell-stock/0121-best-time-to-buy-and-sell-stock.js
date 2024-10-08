/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n=prices.length;
    let profit=0;
    let min=prices[0];
    let cost;
    for(let i=0;i<n;i++){
        cost=prices[i]-min;
        profit=Math.max(profit,cost);
        min=Math.min(prices[i],min)
    }
    return profit;
};