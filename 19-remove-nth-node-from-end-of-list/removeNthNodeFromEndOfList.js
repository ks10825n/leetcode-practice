/**
 * Given the head of a linked list, remove the nth node from the end of the list
 * and return its head.
 * n = 1 -> will remove the last node
 * n = 2 -> will remove the 2nd to last node
 *
 * Can you do this with one pass through the linked list?
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const createListFromArray = (arr) => {
  const head = arr.reduceRight((acc, curr) => {
    if (acc === null) {
      acc = new ListNode(curr);
    } else {
      acc = new ListNode(curr, acc);
    }
    return acc;
  }, null)
  return head;
};

// make two passes to count the length, then remove based off of n.
// const removeNthFromEnd = (head, n) => {
//   let count = 1;
//   let countTemp = head;
//   while (countTemp.next) {
//     countTemp = countTemp.next;
//     count++;
//   }
//   let removeCount = 1;
//   let temp = head;
//   while (temp) {
//     // if at the stage to remove, skip to next
//     if (removeCount === count - n) {
//       if (n === 1) {
//         temp.next = null;
//       } else {
//         temp.next = temp.next.next;
//       }
//     }
//     if (count === 1 && n === 1) {
//       return null;
//     }
//     if (count - n === 0) {
//       return head.next;
//     }
//     temp = temp.next;
//     removeCount++;
//   }
//   console.log(count, removeCount)
//   return head;
// };

// two pointers
const removeNthFromEnd = (head, n) => {
  let slow = head, fast = head;
  // move fast up by n
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (!fast) {
    return head.next
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

let head, n;

// Test #1
head = [1, 2, 3, 4, 5];
n = 1;
head = createListFromArray(head);
const result1 = removeNthFromEnd(head, n);
console.log(result1);

// Test #2
head = [1];
n = 1;
head = createListFromArray(head);
const result2 = removeNthFromEnd(head, n);
console.log(result2);

// Test #3
head = [1, 2];
n = 1;
head = createListFromArray(head);
const result3 = removeNthFromEnd(head, n);
console.log(result3)

// Test #4
head = [1, 2];
n = 2;
head = createListFromArray(head);
const result4 = removeNthFromEnd(head, n);
console.log(result4);