class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alphabeticNumeric = "abcdefghijklmnopqrstuvwxyz0123456789"

        let newStr = ""

        let lowerCase = s.toLowerCase()

        for (let i = 0; i < lowerCase.length; i++) {
            if (alphabeticNumeric.includes(lowerCase[i])) {
                newStr += lowerCase[i]
            }
        }

        let left = 0 
        let right = newStr.length - 1

        while (left < right) {
            if (newStr[left] !== newStr[right]) {
                return false
            }
            left++
            right--
        }

        return true
    }
}
