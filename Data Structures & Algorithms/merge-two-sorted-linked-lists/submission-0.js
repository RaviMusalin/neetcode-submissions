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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let merged = new ListNode()
        let head = merged

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                merged.next = list1
                list1 = list1.next
            } else {
                merged.next = list2
                list2 = list2.next
            }
            merged = merged.next
        }

        // If one of the lists is null, we need to append the rest of the other list to our new list
        if (list1 !== null) {
            merged.next = list1
        } else {
            merged.next = list2
        }

        return head.next
    } 
}
