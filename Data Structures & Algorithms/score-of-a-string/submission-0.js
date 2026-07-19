class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0

        for (let i = 1; i < s.length; i++) {
            let firstNum = s.charCodeAt(i)
            let secondNum = s.charCodeAt(i - 1)
            let currScore = Math.abs(firstNum - secondNum)
            score += currScore
        }

        return score
    }
}
