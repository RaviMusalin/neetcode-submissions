class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodeStr = ""

        for (let str of strs) {
            encodeStr += `${str.length}#${str}`
        }

        return encodeStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let answer = []
        let i = 0

        while (i < str.length) {
            let j = i

            while (str[j] !== '#') {
                j++
            }

            let length = parseInt(str.slice(i,j))
            i = j + 1
            j = i + length
            answer.push(str.slice(i,j))
            i = j
        }

        return answer
    }
}
