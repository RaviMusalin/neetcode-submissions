class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let leftArr = []
       let multiplier = 1

        for (let i = 0; i < nums.length; i++) {
            leftArr.push(multiplier)
            multiplier = multiplier * nums[i]
        } 
        
        let ans = []
        let multiplier2 = 1

        for (let i = nums.length - 1; i >= 0; i--) {
            ans.unshift(multiplier2 * leftArr[i])
            multiplier2 = multiplier2 * nums[i]
        }

        return ans 
    }
}
