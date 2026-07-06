class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let length1 = word1.length
        let length2 = word2.length
        let newStr = ""

        let a = 0
        let b = 0

        while (a < length1 && b < length2) {
            newStr += word1[a]
            newStr += word2[b]

            a++
            b++
        }

        while (a < length1) {
            newStr += word1[a]
            a++
        }

        while (b < length2) {
            newStr += word2[b]
            b++
        }

        return newStr
    }
}
