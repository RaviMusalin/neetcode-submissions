class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsMap = {}

        for (let num of nums) {
            if (num in numsMap) {
                return true
            }

            numsMap[num] = 1
        }

        return false
    }
}
