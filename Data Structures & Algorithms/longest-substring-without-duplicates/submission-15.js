class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let stringSet = new Set()
        let length = 0
        let left = 0
        let right = 0

        while (right < s.length) {
            if (!(stringSet.has(s[right]))) {
                stringSet.add(s[right])
                right++

                length = Math.max(length, right - left)
            } else {
                stringSet.delete(s[left])
                left++
            }

        }


        return length

    }
}
