class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // s="thequickbrownfoxjumpsoverthelazydogthequickbrownfoxjumpsovert"""
       let charSet = new Set()
       let longest = 0
       let left = 0
       let right = 0

       while (right < s.length) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left])
            left++
        }

        charSet.add(s[right])
        longest = Math.max(longest, charSet.size)
        right++
       }

       return longest 
    }
}
