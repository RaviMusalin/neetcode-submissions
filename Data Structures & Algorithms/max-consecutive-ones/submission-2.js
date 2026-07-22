class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxConsecutive = 0
        
        let check = 0
        let currCheck = 0

        while (check < nums.length) {
            if (nums[check] === 1) {
                currCheck += 1
                check++
                maxConsecutive = Math.max(maxConsecutive, currCheck)
            } else {
                maxConsecutive = Math.max(maxConsecutive, currCheck)
                currCheck = 0
                check++
            }
        }

        return maxConsecutive
    }
}
