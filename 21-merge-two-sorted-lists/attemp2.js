/**
 * You are given two sorted linked lists, list1 and list2
 * Merge the two lists in a one sorted list
 *
 * Return the head of the merged linked list
 *
 * While both list1 and list2 are not at tail
 *  Check between list1 and list2 head. Create a new head of the smaller value
 *    and move the head with a temp pointer
 * At this point, set whichever list that is not fully traversed at the tail
 * Return the original head
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const makeList = (arr) => {
  const head = arr.reduceRight((acc, curr) => {
    if (!acc) acc = new ListNode(curr);
    else acc = new ListNode(curr, acc);
    return acc;
  }, null)
  return head;
}

const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) return null
  else if (!list1 && list2) return list2;
  else if (list1 && !list2) return list1;

  const head = new ListNode();
  let curr = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.val = list1.val;
      list1 = list1.next;
    } else {
      curr.val = list2.val;
      list2 = list2.next;
    }
    curr.next = new ListNode();
    if (!list1 || !list2) break;
    curr = curr.next;
  }

  if (!list1) curr.next = list2;
  else curr.next = list1;

  return head;
}

let list1, list2;

// Test #1
list1 = [1, 2, 4], list2 = [1, 3, 4];
list1 = makeList(list1), list2 = makeList(list2)
const result1 = mergeTwoList(list1, list2);
console.log(result1);

// Test #2
list1 = [], list2 = [];
list1 = makeList(list1), list2 = makeList(list2)
const result2 = mergeTwoList(list1, list2);
console.log(result2);

// Test #3
list1 = [], list2 = [0];
list1 = makeList(list1), list2 = makeList(list2)
const result3 = mergeTwoList(list1, list2);
console.log(result3);
