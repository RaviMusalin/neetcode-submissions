class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const totalRows = matrix.length
        const totalCols = matrix[0].length

        let left = 0
        let right = ((totalRows * totalCols) - 1)

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            // Convert 1d index back to 2d. row = mid / cols, col = mid % cols
            const midValue = matrix[Math.floor(mid/totalCols)][mid % totalCols]

            if (midValue === target) {
                return true
            } else if (midValue < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return false
    }
}
