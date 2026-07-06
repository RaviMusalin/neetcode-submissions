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
     * @return {void}
     */
    reorderList(head) {

        // find mid
        let slow = head
        let fast = head

        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let curr = slow.next
        slow.next = null

        // reverse second linked list
        let prev = null 

        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        // combine lists
        let h1 = head
        let h2 = prev

        while (h2) {
            let temp = h1.next
            h1.next = h2
            h1 = h2
            h2 = temp
        }

        return 
    }
}
