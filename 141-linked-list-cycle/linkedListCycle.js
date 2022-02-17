/**
 * Given a head of a linked list, determine if the linked list has a cycle in
 * it.
 *
 * There is a cycle in a linked list if there is some node in the list that can
 * be reached again by following the next pointer.
 *
 * The pos is used to denote the index of the node that tail's next pointer is
 * connected to. 'pos' is NOT passed in as a parameter.
 *
 * Return true if there is a cycle, false otherwise.
 *
 * Can you solve it with O(1) constant memory?
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
};

const cycleCreator = (head, pos) => {
  const linkedList = head.reduceRight((acc, cur) => {
    if (acc === null) acc = new ListNode(cur);
    else acc = new ListNode(cur, acc);
    return acc;
  }, null)

  // find the point where the linkedList will cycle back
  let cyclicList;
  // if no point in the cycle, just return the linked list
  if (pos === -1) {
    return linkedList;
  }

  let depth = 0;
  let traversal = linkedList;
  while (traversal) {
    // if traversed to the point, set the cyclic list to current head
    if (depth === pos) {
      cyclicList = traversal
    }
    // if next is null, end of the list
    if (!traversal.next) {
      traversal.next = cyclicList;
      break;
    }
    // otherwise keep traversing
    traversal = traversal.next;
    depth++;
  }
  return linkedList;
}

// use two pointers , one slow and one fast. If fast catches up to slow, then is cyclical
const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

let head, pos;
let linkedList;

// Test #1
head = [3, 2, 0, -4], pos = 1;
linkedList = cycleCreator(head, pos);
const result1 = hasCycle(linkedList);
console.log(result1);

// Test #2
head = [1], pos = -1;
linkedList = cycleCreator(head, pos);
const result2 = hasCycle(linkedList);
console.log(result2);

// Test #2
head = [1, 2], pos = -1;
linkedList = cycleCreator(head, pos);
const result3 = hasCycle(linkedList);
console.log(result3);
