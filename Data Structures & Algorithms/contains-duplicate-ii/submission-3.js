class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
         let map = {}

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (curr in map) {
            let distance = i - map[curr]
            if (distance <= k) return true
        }
        // update index no matter what
        map[curr] = i
    }

    return false
    }

}
