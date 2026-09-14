class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = 0

        for (let pile of piles) {
            if (pile > right) {
                right = pile
            }
        }

        let result = right

        while (left <= right) {
            let k = Math.floor((left + right) / 2)
            let hours = 0

            for (let pile of piles) {
                hours += Math.ceil((pile/k))
            }

            if (hours <= h) {
                result = k
                right = k - 1
            } else {
                left = k + 1
            }
        }

        return result
    }
}
