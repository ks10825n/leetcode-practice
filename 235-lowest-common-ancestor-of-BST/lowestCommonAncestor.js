/**
 * Given a BST, find the lowest common ancestor of two given nodes in a BST
 *
 * Since this is a BST, if the root is between p and q, that means root is
 * the lowest common ancestor.
 *
 * If p and q are both larger than the current root, then you can move the root
 * to a subtree, vice versa to the left.
 */

const lowestCommonAncestor = (root, p, q) => {
  while (root) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    }
    else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      break;
    }
  }
  return root;
}