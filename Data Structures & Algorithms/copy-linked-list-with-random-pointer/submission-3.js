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
      // Map to store: original node → new copied node
      let newMap = new Map()

      let curr = head
      // PASS 1: Create all new nodes
      while (curr) {
        let copy = new Node(curr.val)
        newMap.set(curr, copy)
        curr = curr.next
      }
    
      curr = head
      // PASS 2: Connect all pointers
      while (curr) {
        let copy = newMap.get(curr)

        // connect next pointer
        copy.next = curr.next ? newMap.get(curr.next) : null

        // connect random pointed
        copy.random = curr.random ? newMap.get(curr.random) : null

        curr = curr.next
      }

      return newMap.get(head)
    }
}


