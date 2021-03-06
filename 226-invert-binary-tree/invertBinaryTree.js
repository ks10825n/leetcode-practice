/**
<<<<<<< HEAD
 * Given the root of a binary tree, invert the tree, and return its root
=======
 * Given the root of a binary tree, invert the tree, and return its root.
>>>>>>> 76fb1c474dc5ae73cdf1451890364e7b0ee891b9
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

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

const invertTree = (root) => {
  if (!root || (!root.left && !root.right)) return root

  let inverted = new TreeNode(root.val);
  const queue = [root];
  const queueInv = [inverted];
  while (queue.length && queueInv.length) {
    const curr = queue.shift();
    const inv = queueInv.shift();

    if (curr.left) {
      inv.right = new TreeNode(curr.left.val);
      queue.push(curr.left);
      queueInv.push(inv.right);
    }
    if (curr.right) {
      inv.left = new TreeNode(curr.right.val);
      queue.push(curr.right);
      queueInv.push(inv.left);
    }
  }
  return inverted
};

let root;

// Test #1
root = [4,2,7,1,3,6,9];
root = treeConstructor(root);
console.log(root);
const result1 = invertTree(root);
console.log(result1);

// Test #2
root = [2,1,3];
root = treeConstructor(root);
console.log(root);
const result2 = invertTree(root);
console.log(result2);

// Test #3
root = [2, null, 1, null, null, 3];
root = treeConstructor(root);
console.log(root);
const result3 = invertTree(root);
console.log(result3);

// Test #4
root = [3];
root = treeConstructor(root);
console.log(root);
const result4 = invertTree(root);
console.log(result4);
