class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;

        // Initialize the result array with 0s
        const answer = new Array(n).fill(0);

        // This stack will store [temperature, index] pairs
        // It will help us find the next warmer day
        const stack = [];

        // Loop through each day's temperature
        for (let i = 0; i < n; i++) {
            const currentTemp = temperatures[i];

            // While the current temperature is warmer than the last one in the stack
            while (stack.length > 0 && currentTemp > stack[stack.length - 1][0]) {
                // Pop the cooler temperature from the stack
                const [prevTemp, prevIndex] = stack.pop();

                // Calculate how many days we waited for a warmer temperature
                answer[prevIndex] = i - prevIndex;
            }

            // Push the current temperature and its index to the stack
            // We’ll wait to find a warmer day for it
            stack.push([currentTemp, i]);
        }

            // Any indexes left in the stack didn’t find a warmer day → remain 0
            return answer;
        }
}
