class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1])

        let count = 0
        let prev = 0

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[prev][1] > intervals[i][0]) {
                count+=1
            } else {
            prev = i
            }
        }

        return count


    }
}
