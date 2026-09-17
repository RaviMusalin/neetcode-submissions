class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        let opening = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        let stack = []

        for (let char of s) {
            if (char === "{" || char === "[" || char === "(") {
                stack.push(char)
            } else {
                let check = stack.pop()
                if (opening[char] !== check) {
                    return false
                }
            }
        }

        if (stack.length) return false

        return true

    }
}
