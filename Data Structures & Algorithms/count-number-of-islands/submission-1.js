class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid) {return 0}

        let islands = 0
        let rows = grid.length
        let cols = grid[0].length

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === '1') {
                    this.dfs(grid, i, j);
                    islands++;
                }
            }
        }
        
        return islands
        
    }

    dfs(grid, i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') { 
            return 
        }

        grid[i][j] = '0'
        this.dfs(grid, i + 1, j)
        this.dfs(grid, i, j + 1);
        this.dfs(grid, i - 1, j);
        this.dfs(grid, i, j - 1);
    }
}
