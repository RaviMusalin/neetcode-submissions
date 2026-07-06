class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""

        for (let str of strs) {
            encoded += `${str.length}#${str}`
        }

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0
       
        while (i < str.length) {
            let j = i

            while (str[j] !== "#") {
                j++
            }

            let length = parseInt(str.slice(i, j))
            i = j + 1
            j = length + i
            result.push(str.slice(i,j))
            i = j
        }

        return result
    }
}
