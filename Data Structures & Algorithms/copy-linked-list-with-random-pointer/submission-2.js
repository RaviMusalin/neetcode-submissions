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
      // Map to store: original node → new copied node
      if (!head) return null
      
      let oldToCopy = new Map()

      let curr = head
      // PASS 1: Create all new nodes

      while (curr) {
        // Create a new node with same value
        let copy = new Node(curr.val)
        oldToCopy.set(curr, copy)
        curr = curr.next
      }

      console.log(oldToCopy)

        // PASS 2: Connect all pointers
        curr = head
        while (curr) {
            let copy = oldToCopy.get(curr)
            
            // Connect next pointer to the NEW corresponding node
            copy.next = curr.next ? oldToCopy.get(curr.next) : null

            // Connect random pointer to the NEW corresponding node
            copy.random = curr.random ? oldToCopy.get(curr.random) : null

            curr = curr.next
        }

        return oldToCopy.get(head)
    }
}


