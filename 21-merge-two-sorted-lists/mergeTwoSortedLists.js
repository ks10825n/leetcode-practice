/**
 * You are given two heads of two sorted linked lists list1 and list2
 * Merge the two list as one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const linkedListConstructor = (arr) => {
  const head = arr.reduceRight((acc, cur) => {
    if (acc === null) acc = new ListNode(cur);
    else acc = new ListNode(cur, acc);
    return acc;
  }, null)
  return head;
};

const mergeTwoLists = (list1, list2) => {
  // links can be null
  // initialize the result and traverser
  if (!list1 && !list2) return null;
  const mergedHead = new ListNode();
  let traverser = mergedHead;
  while (list1 && list2) {
    if (list1.val <= list2.val || list2.val === undefined) {
      traverser.val = list1.val;
      list1 = list1.next;
    } else {
      traverser.val = list2.val;
      list2 = list2.next;
    }
    traverser.next = new ListNode();
    traverser = traverser.next;
  }
  if (!list1) {
    traverser.val = list2.val;
    traverser.next = list2.next;
  } else if (!list2) {
    traverser.val = list1.val;
    traverser.next = list1.next;
  }
  return mergedHead;
};

let list1, list2;

// Test #1
list1 = linkedListConstructor([1]);
list2 = linkedListConstructor([]);
const result1 = mergeTwoLists(list1, list2);
console.log(result1);
