class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Create 9 sets for each row, column, and box
        const rows = new Array(9).fill().map(() => new Set())
        const cols = new Array(9).fill().map(() => new Set())
        const boxes = new Array(9).fill().map(() => new Set())

        // Traverse every cell in the 9x9 board
        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < cols.length; j++) {
                const value = board[i][j]

                if (value === ".") continue // skip empty cells


                // Calculate the 3x3 box index for this (i, j)
                const boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3)

                if (rows[i].has(value) || cols[j].has(value) || boxes[boxIndex].has(value)) {
                    return false
                }  // invalid if number already exists

                // Add value to each  set
                rows[i].add(value)
                cols[j].add(value)
                boxes[boxIndex].add(value)
            }
        }

        return true
    }
}