class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let letters = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        console.log(letters)
        let check = letters.split("").reverse().join("").toLowerCase()
        console.log(check)
        if (letters === check) { 
            return true 
        }  else return false
    }
}
