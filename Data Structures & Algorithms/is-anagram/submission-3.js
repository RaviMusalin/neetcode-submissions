class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let sMap = {}

        for (let char of s) {
            if (sMap[char]) {
                sMap[char] += 1
            } else if (!(sMap[char])) {
                sMap[char] = 1
            }
        }

        for (let char of t) {
            if (sMap[char]) {
                sMap[char] -= 1
            } else {
                return false
            }

            if (sMap[char] < 0) return false
        }

        return true
        
    }
}
