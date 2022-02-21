/**
 * Given the root of a binary search tree and an integer val,
 * find the nodein the BST that equals to val and return the subtree.
 *
 * If node does not exist, return null.
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

const searchBST = (root, val) => {
  let result = null;
  const search = (root) => {
    if (result) return;

    // base case
    if (!root) return root
    if (root.val === val) result = root;
    else if (root.val > val) search(root.left);
    else if (root.val < val) search(root.right);
  }
  search(root);
  return result;
};

let root, val;

// Test #1
root = [4,2,7,1,3], val = 2;
root = treeConstructor(root);
const result1 = searchBST(root, val);
console.log(result1);

root = [4,2,7,1,3], val = 5;
root = treeConstructor(root);
const result2 = searchBST(root, val);
console.log(result2);