class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let forwardArr = []
        let start = 1

        for (let i = 0; i < nums.length; i++) {
            forwardArr.push(start)
            start = start*nums[i]
        } 

        let res = []
        let start2 = 1

        for (let i = nums.length - 1; i >= 0; i--) {
            res.unshift(start2 * forwardArr[i])
            start2 = start2*nums[i]
        }

        return res
    }
}
