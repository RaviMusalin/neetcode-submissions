class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}

        for (let num of nums) {
            if (!(num in count)) {
                count[num] = 1
            } else {
                count[num]++
            }
        }

        let temp = Object.entries(count).sort((a, b) => b[1] - a[1])
        let solution = []

        for (let i = 0; i < k; i++) {
            solution.push(temp[i][0])
        }

        return solution
    }
}
