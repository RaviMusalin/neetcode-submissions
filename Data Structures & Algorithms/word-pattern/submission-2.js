class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {

        let checkMap = {}
        let sCheck = s.split(" ")
        let usedWords = new Set()

        if (!(sCheck.length === pattern.length)) return false
        
        for (let i = 0; i < pattern.length; i++) {
            if (!(pattern[i] in checkMap)) {

                // Another letter already maps to this word
                if (usedWords.has(sCheck[i])) {
                    return false
                }

                checkMap[pattern[i]] = sCheck[i]
                usedWords.add(sCheck[i])

            } else {
                if (!(sCheck[i] === checkMap[pattern[i]])) {
                    return false
                } 
            }
        }

        return true
    }
}