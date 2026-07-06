class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement = function (nums) {
        let check = nums.length / 3;
        let result = new Set();
        let numsMap = {};

        for (let num of nums) {
            if (!numsMap[num]) {
                numsMap[num] = 1;
            } else {
                numsMap[num] += 1;
            }

            if (numsMap[num] > check) {
                result.add(num);
            }
        }

        return Array.from(result);
    };
}
