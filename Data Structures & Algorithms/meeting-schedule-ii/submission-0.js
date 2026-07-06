/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        let start = intervals.map((interval) => interval.start).sort((a, b) => a - b )
        let ends = intervals.map((interval) => interval.end).sort((a, b) => a - b)

        let rooms = 0
        let end = 0

        for (let i = 0; i < intervals.length; i++) {
            if (start[i] < ends[end]) {
                rooms+=1
            } else {
                end++
            }
        }

        return rooms

    }
}
