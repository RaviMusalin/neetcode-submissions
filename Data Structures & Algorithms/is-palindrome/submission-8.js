class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789'
        let sLower = s.toLowerCase()
        let sCheck = ""

        for (let i = 0; i < sLower.length; i++) {
            if (alphanumeric.includes(sLower[i])) {
                sCheck += sLower[i]
            }
        }

        let l = 0
        let r = sCheck.length - 1

        while (l < r) {
            if (!(sCheck[l] === sCheck[r])) {
                return false
            }
            l++
            r--
        }

        return true

    }
}
