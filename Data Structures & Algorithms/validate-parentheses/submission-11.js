class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false
        let stack = []

        for (let str of s) {
            if (str === ")") {
                let check = stack.pop()
                if (check !== "(") {
                    return false
                }
            } else if (str === "]") {
                let check = stack.pop()
                if (check !== "[") {
                    return false
                }
            } else if (str === "}") {
                let check = stack.pop()
                if (check !== "{") {
                    return false
                }
            } else {
                stack.push(str)
            }
        }
        if (stack.length !== 0) return false
        return true
    }
}
