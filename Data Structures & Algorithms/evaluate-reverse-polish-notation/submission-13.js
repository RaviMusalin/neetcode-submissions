class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        // tokens=["1","2","+","3","*","4","-"]

        for (let i = 0; i < tokens.length; i++) {
            let curr = tokens[i]

            if (curr === "+") {
                let a = stack.pop()
                let b = stack.pop()

                let newNum = a + b
                stack.push(newNum)
            } else 
            if (curr === "-") {
                let a = stack.pop()
                let b = stack.pop()

                let newNum = b - a
                stack.push(newNum)
            } else
            if (curr === "*") {
                let a = stack.pop()
                let b = stack.pop()

                let newNum = a * b
                stack.push(newNum)
            } else 
            if (curr === "/") {
                let a = stack.pop()
                let b = stack.pop()

                let newNum = Math.trunc(b / a)
                
                stack.push(newNum)
            } else {
                stack.push(Number(curr))
            }
        }

        return stack.pop()
    }
}
