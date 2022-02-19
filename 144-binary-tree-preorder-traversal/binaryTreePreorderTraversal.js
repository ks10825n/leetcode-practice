/**
 * Given the root of a binary tree, return the preorder traversal of its nodes'
 * value
 *
 * Input - Root of a Binary Tree
 * Output - An array of values from the binary tree
 *
 * After recursive, can you do this iteratively?
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function treeConstructor(arr, i, root) {
  i = i || 0;
  if (arr[i] === null) return null;
  while (i < arr.length) {
    const node = new TreeNode(arr[i])
    root = node;
    node.left = treeConstructor(arr, i * 2 + 1, node.left);
    node.right = treeConstructor(arr, i * 2 + 2, node.right);
    break;
  }
  return root
};

// recursive -> data, left, right
// const preorderTraversal = (root) => {
//   // base case
//   if (!root || !root.val) return [];
//   // recursive case
//   const result = [root.val];
//   const left = preorderTraversal(root.left); // -> empty array
//   const right = preorderTraversal(root.right); // -> [2, 3]
//   return result.concat(left, right);
// };

// iterative - use a stack
const preorderTraversal = (root) => {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const curr = stack.pop();
    result.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return result;
}
let root;

// Test #1
root = [1, 3, 2, null, null, 3];
root = treeConstructor(root);
console.log(root)
const result1 = preorderTraversal(root);
console.log(result1);

