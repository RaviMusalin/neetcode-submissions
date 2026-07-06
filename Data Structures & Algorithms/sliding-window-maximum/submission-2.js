class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let max = []

        let left = 0 
        let right = k

        while (right <= nums.length) {
            let currMax = -Infinity

            for (let i = left; i < right; i++) {
                if (nums[i] > currMax) {
                    currMax = nums[i]
                }
            }
            max.push(currMax)
            
            left++
            right++
        }

        return max
    }
}
