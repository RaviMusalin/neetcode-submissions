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

    // 4#neet4#code4#love3#you
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
