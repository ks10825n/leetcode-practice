/**
 * Given the root of a binary tree, determine if it is a valid binary search
 * tree BST
 *
 * If the left subtree of a node contains only nodes with keys less than the
 * node's keys.
 * If the right subtree of a node contains only nodes with keys greater than
 * the node's keys.
 * Both the left and right subtrees must also be a binary search trees.
 *
 * Use a DFS inorder search
 */

const isValidBST = (root, min = -Infinity, max = Infinity) => {
  if(root === null)
      return true;
  if(root.val <= min || root.val >= max)
      return false;
  return isValidBST(root.right, root.val, max) && isValidBST(root.left, min, root.val)
};
