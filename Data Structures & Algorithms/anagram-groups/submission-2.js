class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let stringMap = {}

        for (let str of strs) {
            let check = str.split("").sort()
            if (check in stringMap) {
                stringMap[check].push(str)
            } else if (!(check in stringMap)) {
                stringMap[check] = [str]
            }
        }

        return Object.values(stringMap)
    }
}
