class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majority = Math.ceil((nums.length/2))
        let numsMap = {}

        for (let i = 0; i < nums.length; i++) {
            if (!(nums[i] in numsMap)) {
                numsMap[nums[i]] = 1
            } else {
                numsMap[nums[i]] += 1
            }

            if (numsMap[nums[i]] === majority) {
                return nums[i]
            }
        }
    }
}
