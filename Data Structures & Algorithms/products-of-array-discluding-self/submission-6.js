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
            start = start * nums[i]
        }

        let res = []
        let resStart = 1

        for (let i = forwardArr.length - 1; i >= 0; i--) {
            res.unshift(resStart*forwardArr[i])
            resStart = resStart * nums[i]
        }

        return res
    }
}
