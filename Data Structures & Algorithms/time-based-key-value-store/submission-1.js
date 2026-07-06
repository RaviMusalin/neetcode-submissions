class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return ""

        const arr = this.keyStore.get(key)
        let left = 0
        let right = arr.length - 1

        let answer = ""

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            const midTimeValue = arr[mid][1]
            const midValue = arr[mid][0]

            if (midTimeValue <= timestamp) {
                answer = midValue
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return answer
    }
}
