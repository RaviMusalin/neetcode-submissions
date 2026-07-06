class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        // Recursive Solution O(2^n)
        let n = cost.length
        let memo = {0: 0, 1: 0 }
        function minCost(i) {
            if (i in memo) {
                return memo[i]
            } else {
                memo[i] = Math.min(cost[i - 2] + minCost(i -2), cost[i - 1] + minCost(i -1))
                return memo[i]

            }


        }

        return minCost(n)
    }
}
