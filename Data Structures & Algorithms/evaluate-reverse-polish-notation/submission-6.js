class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        
        for (let i = 0; i < tokens.length; i++) {
            let char = tokens[i]

            if (char === "+") {
                let a = stack.pop()
                let b = stack.pop()

                let newNum = a + b
                stack.push(newNum) 
            } else if (char === "-") {
                let a = stack.pop()
                let b = stack.pop() 

                let newNum = b - a
                stack.push(newNum)
            } else if (char === "*") {
                let a = stack.pop()
                let b = stack.pop()

                let newNum = a * b
                stack.push(newNum)
            } else if (char === "/") {
                let a = stack.pop()
                let b = stack.pop()

                let newNum = Math.trunc(b / a)
                stack.push(newNum)
            } else {
                stack.push(Number(char))
            }
        }

        return Number(stack[0])
    }
}
