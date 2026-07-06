class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let letters = s.replace(/[^a-zA-Z0-9]/g, '')
        console.log(letters)
        let check = letters.split("").reverse().join("")
        console.log(check)
        if (letters.toLowerCase() === check.toLowerCase()) { 
            return true 
        }  else return false
    }
}
