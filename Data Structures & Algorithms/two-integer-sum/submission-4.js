class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = {}

        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]

            if (target - curr in numMap) {
                return [numMap[target - curr], i]
            } else if (!(curr in numMap)) {
                numMap[curr] = i
            }
         }

         return []
    }
}
