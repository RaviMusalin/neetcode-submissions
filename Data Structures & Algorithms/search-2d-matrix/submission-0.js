class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const totalRows = matrix.length
        const totalCols = matrix[0].length

        let currentRow = 0
        let currentCol = totalCols - 1

        while (currentRow < totalRows && currentCol >= 0) {
            const currentValue = matrix[currentRow][currentCol]

            if (currentValue === target) {
                return true
            } else if (currentValue > target) {
                currentCol--
            } else {
                currentRow++
            }
        }

        return false
    }
}
