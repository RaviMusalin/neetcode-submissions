class Solution {
  /**
   * @param {number} m
   * @param {number} n
   * @return {number}
   */
  uniquePaths(m, n) {
    // Create a 2D DP array (m rows by n columns) filled with 0s
    // This will store the number of unique paths to each cell [i][j]
    const dp = [];
    for (let i = 0; i < m; i++) {
      dp.push(new Array(n).fill(0));
    }

    // Initialize the first column: only 1 way to reach any cell in the first column
    // (you can only move down from the top-left corner)
    for (let i = 0; i < dp.length; i++) {
      dp[i][0] = 1;
    }

    // Initialize the first row: only 1 way to reach any cell in the first row
    // (you can only move right from the top-left corner)
    for (let j = 0; j < dp[0].length; j++) {
      dp[0][j] = 1;
    }

    // Fill the rest of the DP table
    // Each cell [i][j] is the sum of paths from the cell above [i-1][j]
    // and the cell to the left [i][j-1]
    for (let i = 1; i < dp.length; i++) {
      for (let j = 1; j < dp[0].length; j++) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }

    // The bottom-right corner contains the total number of unique paths
    return dp[m - 1][n - 1];
  }
}
