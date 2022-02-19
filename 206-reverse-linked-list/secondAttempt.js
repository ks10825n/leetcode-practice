/**
 * Reverse the linked list and return it
 *
 * 1 -> 2 -> 3 -> 4 -> 5 -> null
 * null -> 1 -> 2 -> 3 -> 4 -> 5 -> null
 * null <- 1 <- 2 <- 3 <- 4 <- 5 null
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
};

const listConstructor = (arr) => {
  const head = arr.reduceRight((acc, curr) => {
    if (!acc) acc = new ListNode(curr);
    else acc = new ListNode(curr, acc);
    return acc
  }, null)
  return head;
};

// Iterative
// const reverseList = (head) => {
//   let prev = null, curr = head, next = null
//   while (curr) {
//     next = curr.next;
//     curr.next = prev;
//     // advance
//     prev = curr;
//     curr = next;
//   }
//   return prev;
// };

// Recursive
const reverseList = (head) => {
  // base case
  if (!head || !head.next) return head;

  const reversed = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversed;
};

let head;

// Test #1
head = [1, 2, 3, 4, 5];
head = listConstructor(head);
const result1 = reverseList(head);
console.log(result1);