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
        const temporary = []
        let min = this.stack[this.stack.length - 1]

        while (this.stack.length > 0) {
            min = Math.min(min, this.stack[this.stack.length - 1])
            temporary.push(this.stack.pop())
        }

        while (temporary.length > 0) {
            this.stack.push(temporary.pop())
        }

        return min
    }
}
