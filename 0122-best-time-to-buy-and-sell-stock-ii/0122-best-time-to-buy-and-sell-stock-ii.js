/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            profit = profit - prices[i];
        }
        if (prices[i] > prices[i - 1]) {
            profit = profit + prices[i];
        }
    }
    return profit;
};