class MinStack {
    constructor() {
        this.stack = []
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        let minimum = Infinity 

        for (let num of this.stack) {
            minimum = Math.min(minimum, num)
        }

        return minimum
    }
}

