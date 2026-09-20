class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longestStr = 0
        let set = new Set()
        let left = 0
        let right = 0

        while (right < s.length) {
            let letter = s[right]
            if (!(set.has(letter))) {
                set.add(letter)
                longestStr = Math.max(longestStr, set.size)
                right++
            } else {
                set.delete(s[left])
                left++
            }
        }

        return longestStr
    }
}
