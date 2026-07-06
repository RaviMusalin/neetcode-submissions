class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        for (let val of s) {
            if (val === "(" || val === "[" || val === "{") {
                stack.push(val)
            } else {
                let prev = stack.pop()

                if (prev === "(" && val !== ")") return false
                if (prev === "[" && val !== "]") return false
                if (prev === "{" && val !== "}") return false
                if (prev === undefined) return false

            }
        }

        return stack.length === 0
    }
}
