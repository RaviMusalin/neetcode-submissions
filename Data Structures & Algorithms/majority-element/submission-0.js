class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majority = Math.ceil(nums.length / 2)
        let numsMap = {}

        for (let num of nums) {
            if (!(numsMap[num])) {
                numsMap[num] = 1
            } else {
                numsMap[num] += 1
            }

            if (numsMap[num] >= majority) {
                return num
            }
        }
    }
}
