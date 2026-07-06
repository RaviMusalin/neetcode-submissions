class TimeMap {
    constructor() {
        // key -> array of [timestamp, value]

        this.store = new Map()
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, [])
        }
        this.store.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.store.has(key)) return ""

        const arr = this.store.get(key) // sorted by timestamp
        let left = 0
        let right = arr.length - 1

        // We want the last index where arr[index][1] <= timestamp
        let answer = ""

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            const midTimeStamp = arr[mid][1]
            const midValue = arr[mid][0]

            if (midTimeStamp <= timestamp) {
                // this is a valid candidate, try to find a later one
                answer = midValue
                left = mid + 1
            } else {
                // value is too large, move to the left
                right = mid - 1
            }
        }

        return answer
    }
}
