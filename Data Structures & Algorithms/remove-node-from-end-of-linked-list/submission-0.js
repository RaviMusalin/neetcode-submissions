/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // Reassign the next pointer of the previous value to the next value
        let dummy = new ListNode(0)
        dummy.next = head

        let left = dummy
        let right = head

        while (right && n > 0) {
            right = right.next
            n -= 1
        }

        while (right) {
            left = left.next
            right = right.next
        }

        left.next = left.next.next
        return dummy.next
    }
}
