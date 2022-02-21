/**
 * You are given the root node of a binary search tree and a value to insert
 * into the tree. Return the root node of the BST after the insertion.
 * It is guaranteed that the value to be inserted does not exist in the BST.
 *
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
};

const treeConstructor = (arr, i = 0, node = null) => {
  if (arr[i] === null) return node
  while (i < arr.length) {
    node = new TreeNode(arr[i]);
    node.left = treeConstructor(arr, i * 2 + 1);
    node.right = treeConstructor(arr, i * 2 + 2);
    break;
  }
  return node;
};

const insertIntoBST = (root, val) => {
  // edge case
  if (!root) root = new TreeNode(val);

  let curr = root;
  while (curr) {

    if (!curr.left && (curr.val > val)) {
      curr.left = new TreeNode(val);
      break;
    } else if (!curr.right && (curr.val < val)) {
      curr.right = new TreeNode(val);
      break;
    }

    // traverser
    if (curr.val < val) {
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }
  return root;
};

let root, val;

// // Test #1
// root = [4,2,7,1,3], val = 5;
// root = treeConstructor(root);
// const result1 = insertIntoBST(root, val);
// console.log(result1);

// // Test #2
// root = [40,20,60,10,30,50,70], val = 25;
// root = treeConstructor(root);
// const result2 = insertIntoBST(root, val);
// console.log(result2);

// // Test #3
// root = [61,46,66,43,null,null,null,39,null,null,null], val = 88;
// root = treeConstructor(root);
// const result3 = insertIntoBST(root, val);
// console.log(result3);

// Test #4
root = [], val = 5;
root = treeConstructor(root);
const result4 = insertIntoBST(root, val);
console.log(result4);