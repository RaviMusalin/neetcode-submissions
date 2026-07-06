class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let charSet = new Set()
        let longest = 0
        let left = 0 
        let right = 0


        while (right < s.length) {
            if (!(charSet.has(s[right]))) {
                charSet.add(s[right])
                right++

            longest = Math.max(right - left, longest)

            } else {
                charSet.delete(s[left])
                left++
            }
        }

        return longest
    }
}
