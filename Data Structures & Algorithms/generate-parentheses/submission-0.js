class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = []

        function backtrack(current, open, close) {
        // Base case: if the current string is of the right length
        if (current.length === n * 2) {
            result.push(current)
            return
        }

        // If we can still add a '(', do it
        if (open < n) {
            backtrack(current + "(", open + 1, close)
        }

        // If we can add a ')', do it (only if it doesn't exceed the number of '(')
        if (close < open) {
            backtrack(current + ")", open, close + 1)
        }
        }
         backtrack("", 0, 0)
        return result
    }
}
