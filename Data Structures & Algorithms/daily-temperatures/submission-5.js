class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let days = new Array(temperatures.length).fill(0)
        let stack = []

        for (let i = 0; i < temperatures.length; i++) {
            let day = temperatures[i]
            while (stack.length > 0 && day > stack[stack.length - 1][0]) {
                let poppedDay = stack.pop()
                days[poppedDay[1]] = i - poppedDay[1]
            }

            stack.push([day, i])
        }
        return days
    }
}
