class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let returnStr = ""

        for (let str of strs) {
            let length = str.length
            returnStr += `${length}#${str}`
        }

        return returnStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let solution = []
        let i = 0

        while (i < str.length) {
            let j = i

            while (str[j] !== "#") {
                j++
            }

            let length = parseInt(str.slice(i, j))
            i = j + 1
            j = length + i
            solution.push(str.slice(i,j))
            i = j
        }

        return solution
    }
}
