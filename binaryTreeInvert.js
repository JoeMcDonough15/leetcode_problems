// 226. Invert Binary Tree
// Easy

// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:

// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Definition for a binary tree node.
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class BinaryTree {
  constructor(rootVal) {
    this.root = new TreeNode(rootVal);
  }
  addBalancedNode(val) {
    const queue = [this.root];
    while (queue.length) {
      const parent = queue.shift();
      if (!parent.left) {
        parent.left = new TreeNode(val);
        return;
      }
      if (!parent.right) {
        parent.right = new TreeNode(val);
        return;
      }
      queue.push(parent.left, parent.right);
    }
  }
}

const tree = new BinaryTree(4);
tree.addBalancedNode(2);
tree.addBalancedNode(7);
tree.addBalancedNode(1);
tree.addBalancedNode(3);
tree.addBalancedNode(6);
tree.addBalancedNode(9);

console.log(tree);

console.log(tree.root.left);
console.log(tree.root.right);
