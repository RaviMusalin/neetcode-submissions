class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let checked = {}

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] in checked) {
                return true
            } else {
                checked[nums[i]] = "true"
            }
            console.log(checked)
        }

        return false
    }
}
