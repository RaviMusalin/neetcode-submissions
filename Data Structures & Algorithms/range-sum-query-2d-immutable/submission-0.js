class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        // create a 2D array to store prefix sums for each row
        this.prefixSum = []

        for (let row = 0; row < matrix.length; row++) {
            let currentRow = []

            for (let col = 0; col < matrix[0].length; col++) {
                if (col === 0) {
                    // first col, just copy the value
                    currentRow[col] = matrix[row][col]
                } else {
                    // add current value to the previous prefix sum in this row
                    currentRow[col] = currentRow[col - 1] + matrix[row][col]
                }
            }

            this.prefixSum.push(currentRow)
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        let totalSum = 0

        // loop through each row in the given range
        for (let row = row1; row <= row2; row++) {

            // if col1 is not in the first column
            if (col1 > 0) {
                // subtract the left part to get only the needed section
                let rowSum = this.prefixSum[row][col2] - this.prefixSum[row][col1 - 1]

                totalSum += rowSum
            } else {
                // is starting from col 0; just take the prefix directly 
                totalSum += this.prefixSum[row][col2]
            }
        }

        return totalSum
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
