class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let n = cost.length
        let dp = new Array(n).fill(0)

        for (let i = 2; i <=n; i++) {
            dp[i] = Math.min((cost[i - 2] + dp[i - 2]), (cost[i - 1] + dp[i - 1]))
        }

        return dp[n]
    }
}
