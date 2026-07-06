class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ""

        for (let curr of strs) {
            str += `${curr.length}#${curr}`
        } 

        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0

        while (i < str.length) {
            let j = i

            while (str[j] !== '#') {
                j++
            }

            let length = parseInt(str.slice(i,j))
            i = j + 1
            j = i + length
            res.push(str.slice(i,j))
            i = j
        }

        return res
    }
}
