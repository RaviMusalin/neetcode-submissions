class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let start = 0
        let end = 1

        intervals.sort((a , b) => a[0] - b[0])
 
        let previous = intervals[0]
        let res = [previous]

        for (let current of intervals) {
            if (current[start] <= previous[end]) {
                previous[end] = Math.max(previous[end], current[end])
            } else {
                res.push(current)
                previous = current
            }
        }

        return res
     }
}
