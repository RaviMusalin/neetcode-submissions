class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let solution = []
        let left = 0
        let right = numbers.length - 1

        while (left < right) {
            if (numbers[left] + numbers[right] === target) {
                solution.push(left + 1, right + 1)
                break
            } else if (numbers[left] + numbers[right] < target) {
                left++
            } else if (numbers[right] + numbers[left] > target) {
                right--
            }
        }

        return solution
    }
}
