class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsMap = {}

        for (let num of nums) {
            if (numsMap[num]) {
                return true
            } else {
                numsMap[num] = true
            }
        }

        return false
    }
}
