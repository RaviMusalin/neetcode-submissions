class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let valid = "abcdefghijklmnopqrstuvwxyz0123456789"
        let sLower = s.toLowerCase()
        let newStr = ""

        for (let i = 0; i < sLower.length; i++) {
            if (valid.includes(sLower[i])) {
                newStr += sLower[i]
            }
        }

        
        let left = 0
        let right = newStr.length - 1

        while (left < right) {
            if (!(newStr[left] === newStr[right])) {
                return false
            } 

            left++
            right--
        }

        return true
    }
}
