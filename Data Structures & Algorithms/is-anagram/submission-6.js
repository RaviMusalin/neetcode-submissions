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
            if (!(char in sMap)) {
                sMap[char] = 1
            } else {
                sMap[char] += 1
            }
        }

        for (let char of t) {
            if (!(char in sMap)) {
                return false
            } else if (char in sMap) {
                sMap[char] -= 1
            } 

            if (sMap[char] < 0) {
                return false
            }
        }

        return true
    }
}
