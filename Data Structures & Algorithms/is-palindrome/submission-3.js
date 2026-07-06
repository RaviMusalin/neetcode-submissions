class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const letters = s.replace(/[^a-zA-Z0-9]/g, '')
        const lowerSentence = letters.toLowerCase()
        let l = 0
        let r = lowerSentence.length - 1

        while (l < r) {
            if (lowerSentence[l] === lowerSentence[r]) {
                l++
                r--
            }

            if (lowerSentence[l] !== lowerSentence[r]) {
                return false
            }
        } 

        return true
    }
}
