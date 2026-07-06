class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        let sMap = {}

        for (let i = 0; i < s.length; i++) {
            if (!(s[i] in sMap)) {
                sMap[s[i]] = 1
            } else if (s[i] in sMap) {
                sMap[s[i]] += 1
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (!(t[i] in sMap)) {
                return false 
            }

            if (t[i] in sMap) {
                sMap[t[i]] -= 1
                if (sMap[t[i]] < 0) {
                    return false
                }
            }
        }

        return true
    } 
}
