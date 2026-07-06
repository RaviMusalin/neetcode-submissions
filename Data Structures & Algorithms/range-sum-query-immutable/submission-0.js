class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = []
        let curr = 0

        for (let num of nums) {
            curr += num
            this.prefix.push(curr)
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let rightSum = this.prefix[right]
        let leftSum = left > 0 ? this.prefix[left - 1] : 0
        return rightSum - leftSum
    }
}
