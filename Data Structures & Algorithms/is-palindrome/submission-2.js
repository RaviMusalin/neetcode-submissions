class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = ''

        for (let i = 0; i < s.length; i++) {
            const char = s[i].toLowerCase();

            if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
                cleaned += char
            }
        }
        
        let left = 0
        let right = cleaned.length - 1
        while (left < right) {
            if (cleaned[left] !== cleaned[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }
}
