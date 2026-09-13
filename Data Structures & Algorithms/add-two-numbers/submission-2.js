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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let List = new ListNode(0)
        let head = List

        let sum = 0
        let carry = 0

        while (l1 !== null || l2 !== null || sum !== 0) {
            if (l1 !== null) {
                sum += l1.val
                l1 = l1.next
            }

            if (l2 !== null) {
                sum += l2.val
                l2 = l2.next
            }

            if (sum >= 10) {
                carry = 1
                sum = sum - 10
            }

            head.next = new ListNode(sum)
            head = head.next
            sum = carry
            carry = 0
        }

        return List.next
    }
}
