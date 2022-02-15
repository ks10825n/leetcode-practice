/**
 * Given the head of a singly linked list, return the middle node of the linked
 * list
 *
 * If there are two middle nodes, return the second middle node.
 */

const ListNode = (val, next) => {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

const createLinkedList = function(arr) {
  const head = arr.reduceRight((acc, cur) => {
    if (acc === null) {
      acc = new ListNode(cur);
    } else {
      acc = new ListNode(cur, acc);
    }
    return acc;
  }, null);
  return head;
}

// traverse the linked list and count how deep
// const middleNode = function(head) {
//   let count = 1;
//   let temp = head;
//   while (temp.next) {
//     temp = temp.next;
//     count++;
//   }

//   let midPoint = Math.floor(count / 2);
//   while (midPoint) {
//     head = head.next;
//     midPoint--;
//   }
//   return head;
// };

// slow and fast pointer. If fast moves by 2, slow will always be halfway
const middleNode = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

let head;

// Test #1
head = createLinkedList([1, 2, 3, 4, 5]);
const result1 = middleNode(head);
console.log(result1); // head -> value: 3

// Test #2
head = createLinkedList([1, 2, 3, 4, 5, 6]);
const result2 = middleNode(head);
console.log(result2); // head -> value: 4