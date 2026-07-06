class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
    let res = [];
    let subset = [];

    function dfs(i) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }

        // include nums[i]
        subset.push(nums[i]);
        dfs(i + 1);

        // backtrack
        subset.pop();

        // exclude nums[i]
        dfs(i + 1);
    }

    dfs(0);
    return res;
}
}
