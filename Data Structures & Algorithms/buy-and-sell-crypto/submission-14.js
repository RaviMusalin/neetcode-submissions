class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let right = 1
        let maxProfit = 0

        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                let curr = prices[right] - prices[left]
                if (curr > maxProfit) {
                    maxProfit = curr
                }
            } else {
                left = right
            }
            right++
        }

        return maxProfit
    }
}
