class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maximum = 0

        let l = 0
        let r = 1


        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let currProfit = prices[r] - prices[l]
                maximum = Math.max(currProfit, maximum)
            } else {
                l = r
            }
            r++
        }

        return maximum

    }
}
