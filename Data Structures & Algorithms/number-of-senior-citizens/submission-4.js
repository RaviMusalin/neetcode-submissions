class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let olderThan = 0

        for (let i = 0; i < details.length; i++) {
            let curr = Number(details[i].slice(11,13))
            if (curr > 60) {
                olderThan++
            }
        }

        return olderThan
    }
}
