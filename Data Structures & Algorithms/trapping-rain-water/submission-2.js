class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       let left = 0
       let right = height.length - 1
       let trappedWater = 0
       let leftMax = 0
       let rightMax = 0

       while (left < right) {
        leftMax = Math.max(height[left], leftMax)
        rightMax = Math.max(height[right], rightMax)
        if (height[left] < height[right]) {
            trappedWater += leftMax - height[left]
            left++
        } else {
            trappedWater += rightMax - height[right]
            right--
        }
       }

       return trappedWater
    }
}
