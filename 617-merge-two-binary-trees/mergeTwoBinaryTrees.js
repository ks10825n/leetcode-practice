/**
 * I am given two binary trees, root1 and root2. Merge them into a new binary
 * tree and return the root. If two nodes overlap, let the value equal the sum,
 * otherwise use the value of the not-null node.
 *
 * Merging process must start at the node of both trees.
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const createTree = (arr, i = 0, root) => {
  // edge case -> if current element is null, return null
  if (arr[i] === null) {
    return null;
  }
  // recursive case
  while (i < arr.length) {
    const node = new TreeNode(arr[i]);
    root = node;
    node.left = createTree(arr, i * 2 + 1, node.left);
    node.right = createTree(arr, i * 2 + 2, node.right);
    // at this point, break out of loop
    break;
  }
  // base case if given 'i' is out of bounds
  return root;
}

const mergeTrees = (root1, root2, mergeRoot) => {

  // base case is both root1 and root2 is null
  if (!root1 && !root2) return null;

  // recursive case
  let node;
  if (!root1) {
    node = new TreeNode(0 + root2.val);
    node.left = mergeTrees(null, root2.left, node.left);
    node.right = mergeTrees(null, root2.right, node.right);
  } else if (!root2) {
    node = new TreeNode(0 + root1.val);
    node.left = mergeTrees(root1.left, null, node.left);
    node.right = mergeTrees(root1.right, null, node.right);
  } else {
    node = new TreeNode(root1.val + root2.val);
    node.left = mergeTrees(root1.left, root2.left, node.left);
    node.right = mergeTrees(root1.right, root2.right, node.right);
  }
  mergeRoot = node;
  // return the node
  return mergeRoot;
};

let root1, root2;
let tree1, tree2;

// Test #1
root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7];
tree1 = createTree(root1), tree2 = createTree(root2);
const result1 = mergeTrees(tree1, tree2);
console.log(result1);