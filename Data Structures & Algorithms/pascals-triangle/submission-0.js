class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
     generate(numRows) {
        const result = [[1]];

        for (let i = 1; i < numRows; i++) {
            const previousRow = result[result.length - 1]; 
            const currentRow = [1];

            for (let j = 1; j < previousRow.length; j++) {
                currentRow.push(previousRow[j - 1] + previousRow[j]);
            }

            currentRow.push(1);
            result.push(currentRow);
        }

        return result;
    }
}