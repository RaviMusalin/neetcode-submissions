class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let valid = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        let sCheck = ""
 
        for (let i = 0; i < s.length; i++) {
            if (valid.includes(s[i])) {
                sCheck += s[i]
            }
        }

        if (sCheck.toLowerCase() === sCheck.split("").reverse().join("").toLowerCase()) {
            return true
        } else {
            return false
        }
        console.log(sCheck)
    }
}
