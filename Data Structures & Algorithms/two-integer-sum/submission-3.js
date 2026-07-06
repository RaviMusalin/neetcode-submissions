class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsMap = {}

        for (let i = 0; i < nums.length; i++) {
            if (target - nums[i] in numsMap) {
                return [numsMap[target - nums[i]], i]
            } 
            
            if (!(nums[i] in numsMap)) {
                numsMap[nums[i]] = i
            }
        }

        return false
    }
}
