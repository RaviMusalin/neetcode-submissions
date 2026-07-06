class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for (let str of strs) {
            result += `${str.length}#${str}`
        }
        console.log(result)
         return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStrs = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            // Find the position of the separator '#'
            while (str[j] !== '#') {
                j++;
            }

            // Get the length of the next string
            const length = parseInt(str.slice(i, j), 10);
            i = j + 1; // Move past the '#'
            
            // Extract the string based on the length
            const nextStr = str.slice(i, i + length);
            decodedStrs.push(nextStr);

            // Move i to the next segment
            i += length;
        }

        return decodedStrs;
    }
}
