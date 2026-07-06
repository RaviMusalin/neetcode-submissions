class Solution {
    /**
     * @param {string} s
     * @param {string[]} words
     * @return {string}
     */
    addBoldTag(s, words) {
        const n = s.length;
        const bold = new Array(n).fill(false);

        for (const word of words) {
            let start = s.indexOf(word);
            while (start !== -1) {
                for (let i = start; i < start + word.length; i++) {
                    bold[i] = true;
                }
                start = s.indexOf(word, start + 1);
            }
        }

        const openTag = "<b>";
        const closeTag = "</b>";
        const sol = [];

        for (let i = 0; i < n; i++) {
            if (bold[i] && (i === 0 || !bold[i - 1])) {
                sol.push(openTag);
            }
            sol.push(s[i]);
            if (bold[i] && (i === n - 1 || !bold[i + 1])) {
                sol.push(closeTag);
            }
        }
        
        let answer = sol.join("")
        return answer
    }
}