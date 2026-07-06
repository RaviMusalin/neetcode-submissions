class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        
        for (let i = 0; i < s.length; i++) {
                let char = s[i]
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char)
            } else {
                let prevValue = stack.pop()

                if (prevValue === '(' && char !== ')') return false
                if (prevValue === '[' && char !== ']') return false
                if (prevValue === '{' && char !== '}') return false
                if (prevValue === undefined) return false
            }
        }

        return stack.length === 0
    }
}
