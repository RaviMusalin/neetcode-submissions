class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        let magazineMap = {}

        for (let i = 0; i < magazine.length; i++) {
            if (magazine[i] in magazineMap) {
                magazineMap[magazine[i]] += 1
            } else {
                magazineMap[magazine[i]] = 1
            }
        }

        for (let i = 0; i < ransomNote.length; i++) {
            if (!(ransomNote[i] in magazineMap)) {
                return false
            } else {
                magazineMap[ransomNote[i]] -= 1
            }

            if (magazineMap[ransomNote[i]] < 0) {
                return false
            }
        }

        return true
    }
}
