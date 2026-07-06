class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
       // Edge case: s1 is longer than s2, can't be a permutation
    if (s1.length > s2.length) return false;

    // Create frequency arrays for a-z (26 letters)
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    // Fill both frequency arrays for the first window
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    // Count how many character counts currently match
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === s2Count[i]) {
            matches++;
        }
    }

    // Sliding window: move window one char at a time
    let left = 0;
    for (let right = s1.length; right < s2.length; right++) {
        // ✅ If all 26 character counts match, we found a permutation
        if (matches === 26) return true;

        // New character enters the window from the right
        const indexIn = s2.charCodeAt(right) - 97;
        s2Count[indexIn]++;
        if (s1Count[indexIn] === s2Count[indexIn]) {
            matches++;
        } else if (s1Count[indexIn] + 1 === s2Count[indexIn]) {
            matches--;
        }

        // Old character exits the window from the left
        const indexOut = s2.charCodeAt(left) - 97;
        s2Count[indexOut]--;
        if (s1Count[indexOut] === s2Count[indexOut]) {
            matches++;
        } else if (s1Count[indexOut] - 1 === s2Count[indexOut]) {
            matches--;
        }

        left++;
        }

        // Final check after the loop
        return matches === 26;
    }
}