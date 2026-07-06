class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = []

        for (let a of asteroids) {
            while (stack && a < 0 && stack[stack.length - 1] > 0) {
                let difference = a + stack[stack.length - 1]

                if (difference < 0) {
                    stack.pop()
                } else if (difference > 0) {
                    a = 0
                } else {
                    a = 0
                    stack.pop()
                }

                
            }

            if (a !== 0) {
                    stack.push(a )
                }
        }

        return stack
    }
}
