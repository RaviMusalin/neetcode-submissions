/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) return []

        let result = []
        let queue = [root]

        while (queue.length) {
            let levelArr = []
            let levelSize = queue.length
            while (levelSize) {
                let current = queue.shift()

                if (current.left) {
                    queue.push(current.left)
                }

                if (current.right) {
                    queue.push(current.right)
                }

                levelArr.push(current.val)
                levelSize--
            }
            result.push(levelArr)
        }

        return result
    }
}
