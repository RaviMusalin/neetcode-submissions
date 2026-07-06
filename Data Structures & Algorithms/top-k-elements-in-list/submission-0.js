class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}

        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]

            if (curr in count) {
                count[curr] += 1
            } else {
                count[curr] = 1
            }
        }

        let temp = Object.entries(count).sort((a,b) => b[1] - a[1])

        let solution = []

        for (let i = 0; i < k; i++) {
            solution.push(temp[i][0])
        }

        return solution
    }
}
