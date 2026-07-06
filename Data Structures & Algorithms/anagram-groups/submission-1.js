class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let solutionMap = {}
        // let solution = []

        for (let str of strs) {
            let check = str.split("").sort().join("")
            if (check in solutionMap) {
                solutionMap[check].push(str) // or [..., str]
            } else if (!(check in solutionMap)) {
                solutionMap[check] = [str]
            }
        }

        return Object.values(solutionMap)
    }
}
