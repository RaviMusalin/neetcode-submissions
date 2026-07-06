class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {}
        // let answer = []

        for (let i = 0; i < strs.length; i++) {
            let word = strs[i]
            let sorted = word.split("").sort().join("")
            if (!(sorted in groups)) {
                groups[sorted] = [word]
            } else if (sorted in groups) {
                groups[sorted].push(word)
            }
        }

        return Object.values(groups)
    }
}
