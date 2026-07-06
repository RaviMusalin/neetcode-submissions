class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {}

        let topFrequency = 0
        let longest = 0

        let left = 0
        let right = 0

        while (right < s.length) {
            let rightChar = s[right]

            map[rightChar] ? map[rightChar] += 1 : map[rightChar] = 1
            topFrequency = Math.max(topFrequency, map[rightChar])

            while ((right - left + 1) - topFrequency > k) {
                let leftChar = s[left]
                map[leftChar]--
                left++
            }
            longest = Math.max(longest, (right - left + 1))
            right++
        }

        return longest
    }
}
