class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let left = 0
        let right = 1

        while (right < prices.length) {
            if (prices[right] > prices[left]) {
                let currProfit = prices[right] - prices[left]
                maxProfit = Math.max(maxProfit, currProfit)
            } else {
                left = right
            }
            right++
        }

        return maxProfit
    }
}
