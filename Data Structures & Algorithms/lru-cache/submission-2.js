//  Node class Just a doubly linked list node:class 
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

// LRUCache constructor
class LRUCache {
    constructor(capacity) {
        this.cap = capacity
        this.cache = new Map() // key => node lookup
        this.left = new Node(0, 0) // LRU dummy
        this.right = new Node(0, 0) // MRU dummy
        this.left.next = this.right
        this.right.prev = this.left
    }

    // Cuts a node out of the linked list.
    remove(node) {
        const prev = node.prev
        const nxt = node.next
        prev.next = nxt
        nxt.prev = prev
    }

    // Adds a node to the right side (MRU position):
    insert(node) {
        const prev = this.right.prev
        prev.next = node
        node.prev = prev
        node.next = this.right
        this.right.prev = node
    }

    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)
            this.remove(node)
            this.insert(node)
            return node.val
        }
        return -1
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key))
        }
        const newNode = new Node(key, value)
        this.cache.set(key, newNode)
        this.insert(newNode)

        if (this.cache.size > this.cap) {
            const lru = this.left.next
            this.remove(lru)
            this.cache.delete(lru.key)
        }
    }
}