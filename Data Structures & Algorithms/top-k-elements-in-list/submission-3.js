class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numsMap = {}

        for (let num of nums) {
            if (num in numsMap) {
                numsMap[num] += 1
            } else {
                numsMap[num] = 1
            }
        }

        let objectVals = Object.entries(numsMap).sort((a,b) => b[1] - a[1])
        let sol = []

        for (let i = 0; i < k; i++) {
            sol.push(objectVals[i][0])
        }

        return sol
    }
}
