class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0
        let l = 0
        let r = heights.length - 1

        while (l <= r) {
            let height = Math.min(heights[l],heights[r])
            let width = r - l
            let currWater = height * width
            maxWater = Math.max(currWater, maxWater) 
            if (heights[l] > heights[r]) {
                r--
            } else {
                l++
            }
        }

        return maxWater
    }
}
