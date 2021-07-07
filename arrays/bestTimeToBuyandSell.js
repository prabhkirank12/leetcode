// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
    //  Time Complexity would be O(n) because we have to go through each element to find the max profit
    let maxProfit = 0;
    let min = prices[0];

    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - min);
    }

    return maxProfit;
};