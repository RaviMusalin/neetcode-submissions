class RandomizedSet {
    constructor() {
        this.numMap = new Map()
        this.nums = []
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.numMap.has(val)) return false 
        this.nums.push(val)
        this.numMap.set(val, this.nums.length - 1)
        return true
    }

    /**
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        if (!this.numMap.has(val)) return false

        let index = this.numMap.get(val)
        let last = this.nums[this.nums.length - 1]
        this.nums[index] = last
        this.numMap.set(last, index)
        this.nums.pop()
        this.numMap.delete(val)
        return true
    }

    /**
     * @return {number}
     */
    getRandom() {
        return this.nums[Math.floor(Math.random() * this.nums.length)]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
