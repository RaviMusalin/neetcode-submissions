class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789"
        let sLowercase = s.toLowerCase()
        let stringCheck = "".replaceAll(" ", "")

        for (let i = 0; i < sLowercase.length; i++) {
            

            if (alphaNumeric.includes(sLowercase[i])) {
                stringCheck += sLowercase[i]
            }

        }

        let l = 0
        let r = stringCheck.length - 1

        while (l < r) {
            if (stringCheck[l] === stringCheck[r]) {
                l++
                r--
            } else {
                return false
            }
        }

        return true
    }
}
