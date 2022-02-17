/**
 * Given the head of a sorted linked list, delete all duplicates such that
 * each element appears only once. Return the linked list sorted as well
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const linkedListConstructor = (arr) => {
  return arr.reduceRight((acc, curr) => {
    if (!acc) acc = new ListNode(curr);
    else acc = new ListNode(curr, acc);
    return acc;
  }, null)
};

const deleteDuplicates = (head) => {
  if (!head || !head.next) return head;

  let curr = head;
  let currVal = null;

  while (curr.next) {
    currVal = curr.val;
    if (curr.next.val === currVal) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return head;
};

let head;
let linkedList;

// Test #1
head = [1, 1, 2, 3, 3];
linkedList = linkedListConstructor(head);
const result1 = deleteDuplicates(linkedList);
console.log(result1); // [1, 2]