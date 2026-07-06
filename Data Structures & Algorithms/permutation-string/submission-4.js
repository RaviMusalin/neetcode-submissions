class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false

        let s1Count = new Array(26).fill(0)
        let s2Count = new Array(26).fill(0)
        
        // Build frequency arrays for s1 and first window of s2
        for (let i = 0; i < s1.length; i++) {
        
            s1Count[s1.charCodeAt(i) - 97]+=1
            s2Count[s2.charCodeAt(i) - 97]+=1
        }

        // Count the number of matches
        let matches = 0

        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++
            }
        }

        // Initialize pointers
        let left = 0
        let right = s1.length

        // Sliding Window
        while (right < s2.length) {
            if (matches === 26) return true

            // Add right character
            let rightChar = s2.charCodeAt(right) - 97
            s2Count[rightChar]+=1
            if (s1Count[rightChar] === s2Count[rightChar]) {
                matches++
            } else if (s1Count[rightChar] + 1 === s2Count[rightChar]) {
                // If there was a previous match but there is no more, we decrement matches 
                matches--
            }

            // Remove Left Char
            let leftChar = s2.charCodeAt(left) - 97
            s2Count[leftChar] -= 1
            if (s1Count[leftChar] === s2Count[leftChar]) {
                matches++
            } else if (s1Count[leftChar] - 1 === s2Count[leftChar]) {
                matches--
            }

            left++
            right++
        }

        return matches === 26
    }
}
