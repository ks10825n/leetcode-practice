/**
 * You are given a perfect binary tree. Populate each next pointer to point
 * to the next node (on the right). If there is no next right node,
 * the next pointer should be set to null.
 *
 * Initially, all next pointers are set to null
 */

class Node {
  constructor(val = null, left = null, right = null, next = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
};

const treeConstructor = (arr, i = 0, root) => {
  if (arr[i] === null || arr[i] === undefined) return null
  while (i < arr.length) {
    const node = new Node(arr[i]);
    root = node;
    root.left = treeConstructor(arr, i * 2 + 1, root.left);
    root.right = treeConstructor(arr, i * 2 + 2, root.right);
    break;
  }
  return root;
};

// breadth-first
// const connect = (root) => {
//   // edge case if root is null
//   if (!root) return null;

//   let queue = [root];
//   while (queue.length) {

//     // push into a temp queue to replace original queue after loop
//     const temp = [];
//     for (let i = 0; i < queue.length; i++) {
//       let curr = queue[i];
//       curr.next = queue[i + 1] || null;
//       // if there is children on your current node, push
//       if (curr.left) {
//         temp.push(curr.left);
//         temp.push(curr.right);
//       }
//     }
//     queue = temp;
//   }
//   return root;
// };

// depth-first
const connect = (root) => {
  // base case, if root is null, return null
  if (!root) return null;

  // recursive case
  if (root.left) {
    root.left.next = root.right;
    root.right.next = root.next ? root.next.left : null;
  }
  connect(root.left);
  connect(root.right);
  return root;
};


let root, tree;

// Test #1
root = [1,2,3,4,5,6,7];
tree = treeConstructor(root);
const result1 = connect(tree);
console.log(result1);