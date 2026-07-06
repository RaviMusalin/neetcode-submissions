class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0
        let left = 0
        let right = heights.length - 1

        while (left < right) {
            let length = right - left
            let height = Math.min(heights[left], heights[right])
            let currWater = height * length
            maxWater = Math.max(currWater, maxWater)
            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }

        return maxWater
    }
}
