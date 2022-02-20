/**
 * Given the root of a binary, return its maximum depth
 *
 * The max depth is the number of nodes along the longest path from the root
 * node down to the farthest leaf node.
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
};

const treeConstructor = (arr, i = 0, node = null) => {
  if (arr[i] === null) return node;
  while (i < arr.length) {
    node = new TreeNode(arr[i]);
    node.left = treeConstructor(arr, i * 2 + 1);
    node.right = treeConstructor(arr, i * 2 + 2);
    break;
  }
  return node;
};

/**
 * Keep a maxDepth value
 * Declare a traverser to DFS that takes in a node and current depth
 *  Once node reaches null, find the max of depth or current postion
 * Return maxDepth
 */

const maxDepth = (root) => {
  let maxDepth = 0;
  if (!root) return maxDepth
  const traverse = (root, position) => {

    maxDepth = Math.max(maxDepth, position);
    if (root.left) traverse(root.left, position + 1);
    if (root.right) traverse(root.right, position + 1);
  }
  traverse(root, 1);
  return maxDepth
};

let root;
// Test #1
root = [3, 9, 20, null, null, 15, 7];
root = treeConstructor(root);
console.log(root);
const result1 = maxDepth(root);
console.log(result1);

// Test #2
root = [1, null, 2];
root = treeConstructor(root);
console.log(root);
const result2 = maxDepth(root);
console.log(result2);

// Test #3
root = [null];
root = treeConstructor(root);
console.log(root);
const result3 = maxDepth(root);
console.log(result3);
