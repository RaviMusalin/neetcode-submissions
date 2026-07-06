class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let start = 0
        let end = 1

        intervals = intervals.sort((a,b) => a[start] - b[start])

        let prev = intervals[0]
        let res = [prev]

        for (let current of intervals) {
            if (current[start] <= prev[end]) {
                prev[end] = Math.max(prev[end], current[end])
            } else {
                res.push(current)
                prev = current
            }
        }

        return res
    }
}
