class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagrams = {}

        for (let str of strs) {
            let anagram = str.split("").sort().join("")
            if (!(anagrams[anagram])) {
                anagrams[anagram] = [str]
            } else {
                anagrams[anagram].push(str)
            }
        }

        return Object.values(anagrams)
    }
}
