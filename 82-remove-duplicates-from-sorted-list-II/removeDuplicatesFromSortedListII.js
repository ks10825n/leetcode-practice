/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var deleteDuplicates = function(head) {
  let curr = head,
      prev = null;
  while(curr && curr.next) {
  // if current node and next node value are same,
  // iterate until we get to the node which does not have the same value as these 2 nodes
      if(curr.val === curr.next.val) {
          while(curr && curr.next && curr.val === curr.next.val) {
              curr = curr.next;
          }
    // the above loop will stop at the last duplicate node, for instance for 1,1,1,2,...
    // the loop will stop at 3rd node from start with value 1
    // so we move to next node which is not part of the previous set of duplicates
          curr = curr.next;

    // if no prev unique value node is encountered, set the `head` to this node
          if(!prev) {
              head = curr;
          } else {    // if there is a prev unique value node, reset it's next pointer
      // we do not change the prev node, since the current node itself can be having duplicate value
      // so we will process the current node, until we identify it as having a unique value
              prev.next = curr;
          }
      } else {    // node is having unique value
    // set prev as the current node and move to the next node
          prev = curr;
          curr = curr.next;
      }
  }
  return head;    // finally return the head
};