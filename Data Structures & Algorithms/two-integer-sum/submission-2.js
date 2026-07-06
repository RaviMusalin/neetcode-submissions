class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let check = {}

        for (let i = 0; i < nums.length; i++) {
            if (target - nums[i] in check) {
                return [check[target - nums[i]], i]
            }

            if (!(nums[i] in check)) {
                check[nums[i]] = i
            }
        }

        return false
    }
}
