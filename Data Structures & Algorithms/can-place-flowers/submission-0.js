class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let f = [...flowerbed]
        f.push(0)
        f.unshift(0)

        let count = 0

        for (let i = 1; i < f.length - 1; i++) {
            if ((f[i - 1] === 0) && (f[i] === 0) && (f[i + 1] === 0)) {
               f[i] = 1
               n -= 1
            } 
        }

        return n <= 0

        

        // return false
    }
}
