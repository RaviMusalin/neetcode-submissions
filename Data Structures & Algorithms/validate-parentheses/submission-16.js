class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false

        let bracketMap = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        let stack = []
        
        for (let bracket of s) {
            if (!(bracket in bracketMap)) {
                stack.push(bracket)
            } else {
                let check = stack.pop()
                if (!(bracketMap[bracket] === check)) {
                    return false
                }
            }
        }

        if (stack.length !== 0) return false

        return true

    }
}
