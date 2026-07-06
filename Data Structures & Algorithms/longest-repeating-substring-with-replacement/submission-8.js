class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {}
        let left = 0
        let right = 0
        let longest = 0
        let topFrequency = 0

        while (right < s.length) {
            map[s[right]] ? map[s[right]] += 1 : map[s[right]] = 1

            topFrequency = Math.max(map[s[right]], topFrequency)

            while ((right - left + 1) - topFrequency > k) {
                let leftChar = s[left]
                map[leftChar] -= 1
                left++
            }

            longest = Math.max(longest, right - left + 1)
            right++
        }

        return longest

    }
}
