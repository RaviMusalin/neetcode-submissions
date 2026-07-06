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
            let width = right - left
            let height = Math.min(heights[right], heights[left])
            let water = width * height
            if (water > maxWater) {
                maxWater = water
            }

            if (heights[left] < heights[right]) {
                left++ 
            } else {
                right--
                }
            }
        return maxWater
        }
    }
