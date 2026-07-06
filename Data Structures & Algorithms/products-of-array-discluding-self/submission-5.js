class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let forward = []
        let start = 1

        for (let i = 0; i < nums.length; i++) {
            forward.push(start)
            start = start * nums[i]
        }

        let res = []
        let resStart = 1

        for (let i = forward.length - 1; i >= 0; i--) {
            res.unshift(resStart*forward[i])
            resStart = resStart * nums[i]
        }

        return res
    }
}
