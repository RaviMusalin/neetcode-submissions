class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let days = new Array(temperatures.length).fill(0)
        let stack = [] // pair [temperature, index]

        for (let i = 0; i < temperatures.length; i++) {
            let day = temperatures[i] // current day
            while (stack.length > 0 && day > stack[stack.length - 1][0]) { // while there are days in the stack and that days temp is less than the current day we are checking
                let poppedDay = stack.pop() // Pop off the last day if that days temp is less than the current day we are looking at
                days[poppedDay[1]] = i - poppedDay[1] // i is the current day and poppedDay[1] stores the i of the current day so i - poppedDay[1] is the amount of days it took to find a day with a higher temp
            }
            stack.push([day, i]) // Keep track of 
        }

        return days
    }
}

