/**
 * Given the root of a binary tree, return the postorder traversal of it's
 * nodes value
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const treeConstructor = (arr, i = 0, node = null) => {
  // edge
  if (arr[i] === null) return node;
  // recursive
  while (i < arr.length) {
    node = new TreeNode(arr[i]);
    node.left = treeConstructor(arr, i * 2 + 1);
    node.right = treeConstructor(arr, i * 2 + 2);
    // base
    break;
  }
  return node
}

/** Pre Order D-L-R
 * 1. Initialize at root
 * 2. Pop off stack and push current val to result.
 * 3. If siblings, add right, then left, and continously pop and check
 */

/** In order L-D-R
 * 1. Initialize at root
 * 2. Check if left exists. If yes, add to stack, and check newly added left
 * 3. Keep going until null. (If no more chilren)
 * 4. Pop off stack and add current value to result
 * 5. Stack should be parent. Pop off stack and add current value to result.
 * 6. If there is a right, traverse
 */

/** Post Order
 * 1. Initialize at root
 * 2. Check if left exists. If yes, add to stack, and check newly added left
 * 3. Keep going until null. (if no more children)
 * 4. Pop off stack and add current value to result
 * -- DIFFERENCE
 * 5. Stack should be parent, check if there is right sibling and add to stack
 * 6. If no more children, then push values
 */

// iterative
// const postorderTraversal = (root) => {
//   if (!root) return [];
//   const result = [];
//   const stack = [root];
//   while (stack.length) {
//     let node = stack[stack.length - 1];
//     if (node.left) {
//       stack.push(node.left);
//       node.left = null;
//     } else if (node.right) {
//       stack.push(node.right)
//       node.right = null;
//     } else {
//       result.push(stack.pop().val);
//     }
//   }
//   return result;
// };

// recursive
const postorderTraversal = (root) => {
  // base case
  if (!root || !root.val) return [];
  // recursive case
  const left = postorderTraversal(root.left);
  const right = postorderTraversal(root.right);
  const result = [root.val]
  return left.concat(right, result);
}

let root;

// Test #1
root = [1, null, 2, null, null, 3];
root = treeConstructor(root);
console.log(root);
const result1 = postorderTraversal(root);
console.log(result1);