class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const stack = [];
    const brackets = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    for (const char of s) {
        if (Object.values(brackets).includes(char)) {
            // If char is an opening bracket, push it onto the stack
            stack.push(char);
        } else if (char in brackets) {
            // If char is a closing bracket, check for matching opening bracket
            if (stack.length === 0 || stack[stack.length - 1] !== brackets[char]) {
                return false;
            }
            stack.pop();
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}

}
