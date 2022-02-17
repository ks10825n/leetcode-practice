/**
 * Given the head of a linked list and an integer val, remove all the nodes of
 * the linked list that has Node.val == val, and return the new head
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const linkedListConstructor = (arr) => {
  const head = arr.reduceRight((acc, cur) => {
    if (!acc) acc = new ListNode(cur);
    else acc = new ListNode(cur, acc);
    return acc;
  }, null)
  return head;
};

const removeElements = (head, val) => {
  // if head contains the value, then shift. If contains all, shift to null
  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }
  // traverse the linked list
  let traverser = head;
  // while next is not null
  while (traverser && traverser.next) {
    // check if next node's value is val
    if (traverser.next.val === val) {
      // if yes, skip over it
      traverser.next = traverser.next.next;
    } else {
      traverser = traverser.next
    }
  }
  // return the head
  return head;
};

let head, val;

// Test #1
head = [1, 2, 6, 3, 4, 5, 6], val = 6;
let linkedList;
linkedList = linkedListConstructor(head);
const result1 = removeElements(linkedList, val);
console.log(result1);

// Test #2
head = [1, 2, 2, 1], val = 2;
linkedList = linkedListConstructor(head);
const result2 = removeElements(linkedList, val);
console.log(result2);

// Test #3
head = [7, 7, 7, 7], val = 7;
linkedList = linkedListConstructor(head);
const result3 = removeElements(linkedList, val);
console.log(result3);