class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let map = {}

        for (let letter of t) {
            if (!(letter in map)) {
                map[letter] = 1
            } else {
                map[letter]+=1
            }
        }

        let left = 0
        let right = 0
        let count = Object.keys(map).length
        let length = Infinity
        let minString = ""

        while (right < s.length) {
            let letter = s[right]

            if (letter in map) {
                map[letter] -= 1
                if (map[letter] === 0) count--
            }

            right++

            while (count === 0) {
                if (right - left < length) {
                    length = right - left
                    minString = s.slice(left, right)
                }

                let leftLetter = s[left]

                if (leftLetter in map) {
                    map[leftLetter]+=1
                    if (map[leftLetter] > 0) { 
                        count++
                    }
                }
                left++
            }
        }
        return minString
    }
}
