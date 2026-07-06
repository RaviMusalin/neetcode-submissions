class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = []

        function dfs(index, currentVal, arr) {
            if (currentVal < 0) return
            if (currentVal === 0) {
                result.push([...arr])
            }

            for (let i = index; i < nums.length; i++) {
                arr.push(nums[i])
                dfs(i, currentVal - nums[i], arr)
                arr.pop()
            }
        }

        dfs(0, target, [])
        return result
    }

}
