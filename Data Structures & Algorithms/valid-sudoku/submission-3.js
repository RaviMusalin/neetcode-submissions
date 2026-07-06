class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Array(9).fill().map(() => new Set())
        let cols = new Array(9).fill().map(() => new Set())
        let boxes = new Array(9).fill().map(() => new Set())

        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < cols.length; j++) {
                let check = board[i][j]
                 
                if (check === ".") continue

                let box = Math.floor(i/3) * 3 + Math.floor(j/3)

                if (rows[i].has(check) || cols[j].has(check) || boxes[box].has(check)) {
                    return false
                }

                rows[i].add(check)
                cols[j].add(check)
                boxes[box].add(check)
            }
        }

        return true
    }
}
