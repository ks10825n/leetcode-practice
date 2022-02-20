/**
 * Given the root of a binary tree, check whether it is a mirror of itself
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
 * 1. If root is null or is one node, return true
 * 2. Initialize 2 queues, one for each side of the tree
 * 3. While there is something in both queues
 *  a. Shift to get current value.
 *  b. If they are not equal, return false
 *  c. Add to q1, the curr of q1 left and right
 *  d. Add to q2, the curr of q2 right and left
 * 4. Return true here
 */
const isSymmetric = (root) => {
  if (!root || (!root.left && !root.right)) return true;
  const q1 = [root.left], q2 = [root.right];
  while (q1.length & q2.length) {
    const currLeft = q1.shift(), currRight = q2.shift();

    // if both null, keep checking
    if (!currLeft && !currRight) continue;
    // if one is null and other is not, return false
    else if (!currLeft && currRight) return false
    else if (currLeft && !currRight) return false

    if (currLeft.val !== currRight.val) return false
    q1.push(currLeft.left, currLeft.right);
    q2.push(currRight.right, currRight.left);
  }
  return true;
};

let root;

// Test #1
root = [1, 2, 2, 3, 4, 4, 3, 5, 6, 7, 8, 8, 7, 6, 5];
root = treeConstructor(root);
console.log(root);
const result1 = isSymmetric(root);
console.log(result1);

// Test #2
root = [1, 2, 2, null, 3, null, 3]
root = treeConstructor(root);
console.log(root);
const result2 = isSymmetric(root);
console.log(result2);

// Test #3
root = []
root = treeConstructor(root);
console.log(root);
const result3 = isSymmetric(root);
console.log(result3);

// Test #4
root = [0]
root = treeConstructor(root);
console.log(root);
const result4 = isSymmetric(root);
console.log(result4);
