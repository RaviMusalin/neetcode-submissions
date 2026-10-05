class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let left = 0
        let right = 0

        while (right < nums.length) {
            if (nums[right] !== 0) {
                [nums[left], nums[right]] = [nums[right], nums[left]]
                left++
                right++
            } else if (nums[right] === 0) {
                right++
            }
        }

        return nums
    }
}
