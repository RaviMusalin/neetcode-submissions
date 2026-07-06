class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
    const n = position.length;
    if (n === 0) return 0;

    // Pair each car's position with its time to reach the target
    const cars = position.map((pos, i) => {
        return [pos, (target - pos) / speed[i]];
    });

    // Sort cars by position descending (closer to target first)
    cars.sort((a, b) => b[0] - a[0]);

    const stack = [];

    for (let [pos, time] of cars) {
        // If this car takes more time than the car in front (on the stack),
        // it forms a new fleet. Otherwise, it's part of the fleet ahead.
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
        // If time <= top of stack, car catches up — same fleet, do nothing
    }

    return stack.length;
}

}
