/**
 * Given the head of a singly linked list, reverse the list, and return the
 * reversed list
 *
 * A linked list can be reversed either iterativel or recursively. Do both.
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
  }, null);
  return head;
};

// iterative approach brute force
// const reverseList = (head) => {
//   const linkedList = [];
//   while (head) {
//     linkedList.push(head.val);
//     head = head.next;
//   }
//   return linkedList.reduce((acc, cur) => {
//     if (!acc) acc = new ListNode(cur);
//     else acc = new ListNode(cur, acc);
//     return acc;
//   }, null);
// };

// iterative approach with pointers
const reverseList = (head) => {
  let prev = null, curr = head, next = null;
  while (curr) {
    // stash next node in list with next
    next = curr.next;
    // change my current next to previous
    curr.next = prev;

    // move up prev and current
    prev = curr;
    curr = next;
  }
  return prev;
};

// recursive approach
// const reverseList = (head) => {
//   // base case -> if head is null (no linked list) or no next value
//   if (!head || !head.next) {
//     return head
//   };
//   // keep recursing until the last
//   const reversedLinkedList = reverseList(head.next);
//   // set your next node to yourself
//   head.next.next = head;
//   // remove the next node connection
//   head.next = null
//   return reversedLinkedList;
// };

let head;
let linkedList;

// Test #1
head = [1, 2, 3, 4, 5];
linkedList = linkedListConstructor(head);
const result1 = reverseList(linkedList);
console.log(result1); // [5, 4, 3, 2, 1]

// Test #2
head = [];
linkedList = linkedListConstructor(head);
const result2 = reverseList(linkedList);
console.log(result2); // []
