class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        if (nums.length === 1) return 0

        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1] 
            || mid === 0 && nums[mid] > nums[mid + 1] 
            || mid === nums.length - 1 && nums[mid] > nums[mid - 1]) {
                return mid
            } else if (nums[mid + 1] > nums[mid]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
}
