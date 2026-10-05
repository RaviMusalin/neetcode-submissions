class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let max = 0

        while (left < right) {
            let length = right - left
            let height = Math.min(heights[left], heights[right])
            let vol = length * height

            max = Math.max(vol, max)

            if (heights[left] >= heights[right]) {
                right--
            } else {
                left++
            }
        }

        return max
    }
}
