/**
 * Given the root of a binary tree, return the level order traversal of it's
 * nodes' values
 */

function TreeNode(val, left, right) {
  this.val = val || 0;
  this.left = left || null;
  this.right = right || null;
};

function TreeConstructor(arr, i, root) {
  i = i || 0;
  if (arr[i] === null) return null;
  while (i < arr.length) {
    const node = new TreeNode(arr[i])
    root = node;
    node.left = TreeConstructor(arr, i * 2 + 1);
    node.right = TreeConstructor(arr, i * 2 + 2);
    break;
  }
  return root
};

function levelOrder(root) {
  // initialize the queue with the root
  const queue = [root];
  const result = [];
  // while there is something in the queue
  while (queue[0]) {
    const level = [];
    // get the length of queue at this time, as queue.length will change dynamically
    const queueLength = queue.length;
    // loop through it
    for (let i = 0; i < queueLength; i++) {
      let curr = queue.shift();
      level.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    result.push(level);

  }
  return result;
};

let root;
let tree;

// Test #1
root = [3, 9, 20, null, null, 15, 7];
tree = TreeConstructor(root);
const result1 = levelOrder(tree);
console.log(result1);