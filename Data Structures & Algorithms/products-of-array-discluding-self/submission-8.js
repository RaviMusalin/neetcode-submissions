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
            start *= nums[i]
        }

        let res = []
        let back = 1

        for (let i = nums.length - 1; i >= 0; i--) {
            res.unshift(back * forward[i])
            back *= nums[i]
        }

        return res
    }
}
