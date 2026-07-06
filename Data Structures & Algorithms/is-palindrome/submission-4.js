class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
          const letters = s.replace(/[^A-Za-z0-9]/g, '')
        const lowerCaseSentence = letters.toLowerCase()

        let l = 0
        let r = lowerCaseSentence.length - 1

        while (l < r) {
            if (lowerCaseSentence[l] === lowerCaseSentence[r]) {
                l++
                r--
            }

            if (lowerCaseSentence[l] !== lowerCaseSentence[r]) {
                return false
            }
        }

        return true
    }
}
