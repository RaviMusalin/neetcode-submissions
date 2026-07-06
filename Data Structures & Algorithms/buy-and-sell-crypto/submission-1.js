class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let minPrice = Infinity
       let maxProfit = 0

       for (let price in prices) {
        if (prices[price] < minPrice) {
            minPrice = prices[price]
        }

        let profit = prices[price] - minPrice
        if (profit > maxProfit) {
           maxProfit = profit
        }
       }

       return maxProfit
     }
}
