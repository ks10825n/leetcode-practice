/**
 * Given the root of a BST, and target number k, return true if there exists
 * two elements in the BST
 *
 * Iterate through a BST and as you reach a value, add it to a set. If there
 * is at any point a value in the set that is the difference between k
 * and current value, return true. Otherwise return false
 */

const findTarget = (root, k) => {
  const stack = [root];
  const set = new Set();
  while (stack.length) {
    const curr = stack.pop();
    if (set.has(k - curr.val)) return true;
    set.add(curr.val);
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return false
};