class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       let map = new Map()

       for (let letter of t) {
        if (!map.has(letter)) {
            map.set(letter, 1)
        } else {
            map.set(letter, map.get(letter) + 1)
        }
       }

       let left = 0
       let right = 0
       let length = Infinity
       let count = map.size
       let minWindow = ""

       while (right < s.length) {

         let rLetter = s[right]
         if (map.has(rLetter)) {
            map.set(rLetter, map.get(rLetter) - 1)
            if (map.get(rLetter) === 0) count--
         }

         right++

         while (count === 0) {
            if (right - left < length) {
                length = right - left
                minWindow = s.slice(left, right)
            }

            let leftLetter = s[left]
            if(map.has(leftLetter)) {
                map.set(leftLetter, map.get(leftLetter) + 1)
                if (map.get(leftLetter) > 0) count++
            }
            left++
         }
       }

       return minWindow
    }
}
