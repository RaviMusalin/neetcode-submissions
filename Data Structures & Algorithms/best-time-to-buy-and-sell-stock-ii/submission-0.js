class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let total = 0

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                let sum = prices[i] - prices[i - 1]
                total += sum
            }
        }

        return total 

    }
}
