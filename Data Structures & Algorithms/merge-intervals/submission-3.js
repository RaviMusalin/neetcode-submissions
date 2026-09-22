class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0])

        let newInt = []
        let current = intervals[0]

        for (let i = 1; i < intervals.length; i++) {
            if (current[1] >= intervals[i][0]) {
                current[1] = Math.max(current[1], intervals[i][1])
            } else {
                newInt.push(current)
                current = intervals[i]
            }
        }

        newInt.push(current)

        return newInt
    }
}
