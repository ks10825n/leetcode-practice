/**
 * Given the root of a binary tree, invert the tree, and return its root
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
  while(i < arr.length) {
    node = new TreeNode(arr[i]);
    node.left = treeConstructor(arr, i * 2 + 1);
    node.right = treeConstructor(arr, i * 2 + 2);
    break;
  }
  return node;
}

const invertTree = (root) => {
  // edge case - root is null or only 1 node
  if (!root || (!root.left && !root.right)) return root

  let invertedRoot;
  const queue = [root];
  const queueInv = [root];
  while (queue.length && queueInv.length) {
    const curr = queue.shift();

    const inverted = queueInv.shift();

  }
  return invertedRooot
};

let root;

// Test #1
root = [4, 2, 7, 1, 3, 6, 9];
root = treeConstructor(root);
console.log(root);