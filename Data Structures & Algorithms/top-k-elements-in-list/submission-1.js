class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let occurences = {}

        for (let num of nums) {
            if (!(num in occurences)) {
                occurences[num] = 1
            } else {
                occurences[num] += 1
            }
        }

        let temp = Object.entries(occurences).sort((a,b) => b[1] - a[1])

        let solution = []

        for (let i = 0; i < k; i++) {
            solution.push(temp[i][0])
        }

        return solution
    }

}
