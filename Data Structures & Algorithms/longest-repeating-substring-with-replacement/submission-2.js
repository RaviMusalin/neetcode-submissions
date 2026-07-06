class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charMap = {}
        let topFreq = 0
        let longestStr = 0

        let left = 0
        let right = 0

        while (right < s.length) {
            let rightChar = s[right]

            charMap[rightChar] = charMap[rightChar] + 1 || 1
            topFreq = Math.max(topFreq, charMap[rightChar])

            while ((right - left + 1) - topFreq > k) {
                charMap[s[left]] -= 1
                left++
            }

            longestStr = Math.max(longestStr, right - left + 1)
            right++
        }

        return longestStr
    }
}
