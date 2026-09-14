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
     * @return {boolean}
     */
    isBalanced(root) {
        function calculateHeight(node) {
            if (!node) {
                return 0
            }

            const leftHeight = calculateHeight(node.left)
            const rightHeight = calculateHeight(node.right)

            if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
                return -1
            }

            return Math.max(leftHeight, rightHeight) + 1
        }

        return calculateHeight(root) !== -1
    }
}
