/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // iterate through L1 and concatenate the val of each ListNode as a string
  let str1 = '';
  while (l1) {
      str1 += l1.val;
      l1 = l1.next;
  }
  let str2 = '';
  while (l2) {
      str2 += l2.val;
      l2 = l2.next;
  }
  str1 = reverseString(str1);
  str2 = reverseString(str2);
  if (str1.length > str2.length) str2 = str2.padStart(str1.length, '0');
  else str1 = str1.padStart(str2.length, '0');
  str1 = str1.split('');
  str2 = str2.split('');

  let carryOver = 0;
  const sumAsArray = [];
  // iterate backwards
  for (let i = str1.length - 1; i >= 0; i--) {
      let digitSum = carryOver + Number(str1[i]) + Number(str2[i]);
      if (digitSum >= 10) {
          digitSum -= 10;
          carryOver = 1;
      } else carryOver = 0;
      sumAsArray.push(digitSum);
  }
  if (carryOver) sumAsArray.push(carryOver);


  const sumList = new ListNode();
  // reverse the string and turn it into a number
  // do the same thing to L2
  // add the two numbers and reverse it
  // create a new linkedLists with the new Sum that is reversed
  let i = 0;
  let traverser = sumList
  while (i < sumAsArray.length) {
      traverser.val = sumAsArray[i]
      if (sumAsArray[i + 1] !== undefined) traverser.next = new ListNode();
      traverser = traverser.next;
      i++;
  }
  return sumList;
};

var reverseString = function(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
      result += str[i]
  }
  return result;
}