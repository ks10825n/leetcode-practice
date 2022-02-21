/**
 * Given the root of a binary tree and an integer targetSum, return true if the
 * tree has a root-to-leaf path such that adding the values will equal
 * targetSum.
 *
 * It must be a root-leaf path, where the leaf will have no children
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

// do DFS -> preOrder dlr
const hasPathSum = (root, targetSum) => {
  let result = false;
  // edge case if no root
  if (!root) return false;

  let sum = 0;
  let level = 1;
  const dfs = (node, sum) => {
    if (result) return;
    // base case
    if (!node) return 0;

    // recursive case
    sum += node.val
    // if currently at leaf
    if (!node.left && !node.right) {
      if (sum === targetSum) {
        result = true
      }
    }

    dfs(node.left, sum);
    dfs(node.right, sum);
  }
  dfs(root, sum);
  return result;
};

let root, targetSum;

// Test #1
root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22;
root = treeConstructor(root);
console.log(root);
const result1 = hasPathSum(root, targetSum);
console.log(result1); // true

// Test #2
root = [1,2,3], targetSum = 5;
root = treeConstructor(root);
console.log(root);
const result2 = hasPathSum(root, targetSum);
console.log(result2); // true

// Test #3
root = [], targetSum = 0;
root = treeConstructor(root);
console.log(root);
const result3 = hasPathSum(root, targetSum);
console.log(result3); // false

// Test #4
root = [1, 2], targetSum = 1;
root = treeConstructor(root);
console.log(root);
const result4 = hasPathSum(root, targetSum);
console.log(result4); // false

// Test #5
root = [1], targetSum = 1;
root = treeConstructor(root);
console.log(root);
const result5 = hasPathSum(root, targetSum);
console.log(result5); // false