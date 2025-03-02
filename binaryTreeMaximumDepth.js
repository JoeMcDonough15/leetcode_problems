// LeetCode 104 - Maximum Depth of Binary Tree - Easy
//
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]

//      3
//     / \
//    9   20
//        / \
//       15  7
//
// Output: 3
//
//
// Example 2:
// Input: root = [1,null,2]
//
//           1
//            \
//             2
//
// Output: 2

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
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
  constructor() {
    this.root = null; // maximumDepth constraints allow for 0 nodes, so we have to have a way to express a tree with no nodes.  So this.root starts at null.  IF we don't add any nodes, we have an empty tree.
  }

  addBalancedNode = (val) => {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
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
  };

  // These methods are to produce unbalanced trees for more test cases

  addNodeToLeft = (val, parent = this.root) => {
    if (!parent) {
      this.root = new TreeNode(val);
      return;
    }
    if (!parent.left) {
      parent.left = new TreeNode(val);
      return;
    }
    this.addNodeToLeft(val, parent.left);
  };

  addNodeToRight = (val, parent = this.root) => {
    if (!parent) {
      this.root = new TreeNode(val);
      return;
    }
    if (!parent.right) {
      parent.right = new TreeNode(val);
      return;
    }
    this.addNodeToRight(val, parent.right);
  };

  // This is the solution to LeetCode 104 Maximum Depth of Binary Tree
  // Complexity:
  // Time: O(n) because every node is visited once
  // Space: O(n) because every node gets put into the queue (in a sub array)
  maxDepth = (rootNode = this.root) => {
    if (!rootNode) return 0;
    let depthCount = 0;
    const queue = [[rootNode]];
    while (queue.length) {
      const currentLevelNodes = queue.shift();
      depthCount++;
      const nextLevelNodes = []; // next subarray to put into the queue (if there are child nodes at this level)
      currentLevelNodes.forEach((node) => {
        if (node.left) {
          nextLevelNodes.push(node.left);
        }
        if (node.right) {
          nextLevelNodes.push(node.right);
        }
        if (nextLevelNodes.length) {
          queue.push(nextLevelNodes);
        }
      });
    }
    return depthCount;
  };
}

// Test Cases

//      3
//     / \
//    9   20
//        / \
//       15  7

const unbalancedTreeOne = new BinaryTree();
unbalancedTreeOne.addNodeToLeft(3); // root node
unbalancedTreeOne.addNodeToLeft(9);
unbalancedTreeOne.addNodeToRight(20);
unbalancedTreeOne.addNodeToLeft(15, unbalancedTreeOne.root.right); // provide the 20 node as the parent
unbalancedTreeOne.addNodeToRight(7, unbalancedTreeOne.root.right); // provide the 20 node as the parent

//           1
//            \
//             2

const unbalancedTreeTwo = new BinaryTree();
unbalancedTreeTwo.addNodeToRight(1); // root node
unbalancedTreeTwo.addNodeToRight(2);

const emptyTree = new BinaryTree();

console.log(unbalancedTreeOne.maxDepth()); // 3
console.log(unbalancedTreeTwo.maxDepth()); // 2
console.log(emptyTree.maxDepth()); // 0
console.log(unbalancedTreeOne.maxDepth(unbalancedTreeOne.root.right)); // 2
