class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0

        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                if (prices[i] < prices[j]) {
                    let currProfit = prices[j] - prices[i]
                    maxProfit = Math.max(maxProfit, currProfit)
                }
            }
        }

        return maxProfit
    }
}
