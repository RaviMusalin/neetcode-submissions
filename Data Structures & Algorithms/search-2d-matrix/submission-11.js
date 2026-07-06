class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length
        let cols = matrix[0].length

        let top = 0
        let bottom = rows - 1

        while (top <= bottom) {
            let mid = Math.floor((top + bottom) / 2)
            
            // If the target is greater than the last number is the middle row, 
            // move the top row to one above mid
            if (target > matrix[mid][cols - 1]) {
                top = mid + 1
            } else if (target < matrix[mid][0]) {
            // if target is less than the first number is the middle row, move bottom row 
                bottom = mid - 1
            } else {
            // we found the middle row or top is now above bottom
                break
            }
        }

        if (!(top <= bottom)) {
            return false
        }

        let row = Math.floor((top + bottom) / 2)
        let left = 0
        let right = cols - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (target > matrix[row][mid]) {
                left = mid + 1
            } else if (target < matrix[row][mid]) {
                right = mid - 1
            } else {
                return true
            }
        }

        return false
    }
}
