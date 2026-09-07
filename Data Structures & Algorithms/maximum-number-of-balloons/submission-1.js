class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let balCount = {
            "b": 0,
            "a": 0,
            "l": 0,
            "o": 0,
            "n": 0
        }

        let count = 0

        for (let i = 0; i < text.length; i++) 
            if (text[i] in balCount) {
                balCount[text[i]]++
            }

        while (balCount["b"] > 0 && balCount["a"] > 0 && balCount["l"]> 1 && balCount["o"] > 1 && balCount["n"] > 0) {
            count++
            balCount["b"] -= 1
            balCount["a"] -= 1
            balCount["l"] -= 2
            balCount["o"] -= 2
            balCount["n"] -= 1
        }

        return count
    }
}
