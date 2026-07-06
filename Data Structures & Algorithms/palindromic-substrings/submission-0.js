class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0

        for (let i = 0; i < s.length; i++) {
            let left = i
            let right = i

            // odd
            isPal(left, right)
            isPal(left, right + 1)

        }

        function isPal(left, right) {
            while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
                count++
                left--
                right++
            }
        }

        return count
    }
}
