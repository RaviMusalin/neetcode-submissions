class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // s = "zxyzxyz"
        let charSet = new Set()
        let left = 0
        let maxLength = 0

        for (let right = left; right < s.length; right++) {
            while (charSet.has(s[right])) {
                charSet.delete(s[left])
                left++
            }

            charSet.add(s[right])
            maxLength = Math.max(maxLength, charSet.size)
        }

        return maxLength
    }
}
