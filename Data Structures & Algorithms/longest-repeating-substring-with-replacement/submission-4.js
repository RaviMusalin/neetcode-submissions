class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charMap = {}

        let left = 0
        let right = 0

        let longest = 0
        let topFreq = 0

        while (right < s.length) {
            let curr = s[right]

            charMap[curr] = charMap[curr] + 1 || 1

            topFreq = Math.max(topFreq, charMap[curr])

            while ((right - left + 1) - topFreq > k) {
                charMap[s[left]] -= 1
                left++
            }

            longest = Math.max(longest, right - left + 1)
            right++
        }

        return longest
    }
}
