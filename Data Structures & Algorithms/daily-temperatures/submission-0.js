class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length
        const answer = new Array(n).fill(0)
        const stack = []

        for (let i = 0; i < n; i++) {
            const temp = temperatures[i]
            while (stack.length > 0 && stack[stack.length - 1][0] < temp) {
                const [stackTemp, stackI] = stack.pop()
                answer[stackI] = i - stackI
            }

            stack.push([temp, i])
        }

        return answer
    }
}
