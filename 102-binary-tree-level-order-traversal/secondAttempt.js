/**
 * Given the root of a binary tree, return the level order traversal of it's
 * nodes values.
 */

class ListNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
};

const treeConstructor = (arr, i = 0, node = null) => {
  if (arr[i] === null) return node;
  while (i < arr.length) {
    node = new ListNode(arr[i]);
    node.left = treeConstructor(arr, i * 2 + 1);
    node.right = treeConstructor(arr, i * 2 + 2);
    break;
  };
  return node;
};

/**
 * Use a queue, initialize at root. Print val at current node, then push left
 * and right. Go to left, print val, push children left and right. Then go to
 * right and so on.
 */
const levelOrder = (root) => {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length) {
    const level = [];
    const qLength = queue.length;
    for (let i = 0; i < qLength; i++) {
      const curr = queue.shift();
      level.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.push(level);
  }
  return result;
};

let root;

// Test #1
root = [3, 9, 20, null, null, 15, 7];
root = treeConstructor(root);
console.log(root);
const result1 = levelOrder(root);
console.log(result1);