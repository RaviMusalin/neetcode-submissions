class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set()
        let left = 0
        let right = 0
        let longestLength = 0

        while (right < s.length) {
            if (!(charSet.has(s[right]))) {
                charSet.add(s[right])
                right++
                longestLength = Math.max(longestLength, right - left)
            } else {
                charSet.delete(s[left])
                left++
            }
        }

        return longestLength
    }
}
