class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
};

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(key, val) {
    const newNode = new Node(key, val);
    // if head is null (DLL is empty)
    if (!this.head) {
      // set head and tail to the new Node
      this.head = newNode;
      this.tail = newNode;
    // if head exists (DLL has nodes, add the Node at the tail)
    } else {
      // set current tail's Node's next to the inserting Node
      this.tail.next = newNode;
      // set the inserting Node's prev to the DLL's tail Node
      newNode.prev = this.tail;
      // set the DLL's tail pointer to the inserting Node
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  // remove the Node passed in
  remove(node) {
    // if the passed in Node's next and prev is null, it must be the only Node in the DLL
    if (!node.next && !node.prev) {
      // set the DLL head and tail null
      this.head = null;
      this.tail = null;
    // if Node's next is null, it must be the Node at the tail
    } else if (!node.next) {
      // set DLL's tail to the passed in Node's prev Node
      this.tail = node.prev;
      // now that the tail is the previous node, set the tail's next to null
      this.tail.next = null;
    // if Node's prev is null, it must be the Node at the head
    } else if (!node.prev) {
      // set the DLL's head to the passed in Node's next Node
      this.head = node.next;
      // now that the head is the next node, set the head's prev to null
      this.head.prev = null;
    // the Node is somewhere in the middle
    } else {
      // set passed in Node's prev and next to each other
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.DLL = new DoublyLinkedList();
    this.hashMap = {};
  }

  get(key) {
    // if key does not exist in the hashMap, return -1
    if(!this.hashMap[key]) return -1;
    // if it does, get the Node's val saved at the hash map's key
    const value = this.hashMap[key].val;
    // remove the key's current spot in the DLL
    this.DLL.remove(this.hashMap[key]);
    // create a new Node and add it to the tail and set the new Node to the current key in hashmap
    this.hashMap[key] = this.DLL.push(key, value);
    return value;
  }

  // set a new key value pair to the most recently used
  put(key, value) {
    // if the current key exists, remove it from the DLL order
    if(this.hashMap[key]) this.DLL.remove(this.hashMap[key]);
    // and set it to the tail so it is the most recent
    this.hashMap[key] = this.DLL.push(key, value);
    // at this point, if either is a new node, or replaced, if larger than capacity, remove the head of the DLL
    if (this.DLL.length > this.capacity) {
      const headKey = this.DLL.head.key;
      delete this.hashMap[headKey];
      this.DLL.remove(this.DLL.head);
    }
  }
}