class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsMap = {}

        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            if ((target - curr) in numsMap) {
                return [numsMap[target - curr], i]
            }
            
            numsMap[curr] = i
        }

        
    }
}
