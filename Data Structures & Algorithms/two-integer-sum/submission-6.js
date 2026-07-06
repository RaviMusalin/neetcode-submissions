class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numsMap = {}

        for (let i = 0; i < nums.length; i++) {
            let curr = target - nums[i]

            if (curr in numsMap) {
                return [numsMap[curr], i]
            }

            numsMap[nums[i]] = i
        }

        console.log(numsMap)
    }
}
