// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
      if (!head) return null

      let oldToNew = new Map()

      let curr = head

      while (curr) {
        let copy = new Node(curr.val)
        oldToNew.set(curr, copy)
        curr = curr.next
      }

      curr = head

      while (curr) {
        let copy = oldToNew.get(curr)

        copy.next = curr.next ? oldToNew.get(curr.next) : null

        copy.random = curr.random ? oldToNew.get(curr.random) : null

        curr = curr.next
      }

      return oldToNew.get(head)
    }
}


