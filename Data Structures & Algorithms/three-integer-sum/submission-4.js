class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = []
        nums.sort((a,b) => a - b) // Sort the Array

        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicate numbers for the first number
            if (nums[i] === nums[i - 1]) continue

            let left = i + 1
            let right = nums.length - 1

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right]

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]])


                    // Skip duplicates for left and right
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++
                    }

                    while (left < right && nums[right] === nums[right - 1]) {
                        right--
                    }

                    left++
                    right--
                } else if (sum < 0) {
                    left++
                } else {
                    right--
                }
            }
        }

        return result
    }
}
