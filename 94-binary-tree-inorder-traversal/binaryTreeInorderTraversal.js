/**
 * Given a root of a binary tree, traverse in-order and return an array of vals
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const treeConstructor = (arr, i = 0, node = null) => {
  if (arr[i] === null) return null;

  while (i < arr.length) {
    node = new TreeNode(arr[i]);
    node.left = treeConstructor(arr, i * 2 + 1)
    node.right = treeConstructor(arr, i * 2 + 2)
    break;
  }
  return node;
};

// // recursive
// const inorderTraversal = (root) => {
//   // base case
//   if (!root) return [];
//   // recursive case
//   const left = inorderTraversal(root.left)
//   const result = [root.val];
//   const right = inorderTraversal(root.right);
//   return left.concat(result, right);
// };

// iterative
const inorderTraversal = (root) => {
  let curr = root;
  const result = [], stack = [];
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left
    }
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  return result
}

let root;

// Test #1
root = [1, null, 2, null, null, 3]
root = treeConstructor(root);
const result1 = inorderTraversal(root);
console.log(result1);