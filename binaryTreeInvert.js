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

  addBalancedNode = (val) => {
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
    if (!parent.left) {
      parent.left = new TreeNode(val);
      return;
    }
    this.addNodeToLeft(val, parent.left);
  };

  addNodeToRight = (val, parent = this.root) => {
    if (!parent.right) {
      parent.right = new TreeNode(val);
      return;
    }
    this.addNodeToRight(val, parent.right);
  };

  // This is the method to solve LeetCode Problem 226. Invert Binary Tree
  invertTree = (root = this.root) => {
    if (!root) {
      return root;
    }
    this.invertTree(root.left);
    this.invertTree(root.right);
    const tempLeft = root.left;
    root.left = root.right;
    root.right = tempLeft;
    return root;
  };
}

// Balanced Tree
const balancedTree = new BinaryTree(4);
balancedTree.addBalancedNode(2);
balancedTree.addBalancedNode(7);
balancedTree.addBalancedNode(1);
balancedTree.addBalancedNode(3);
balancedTree.addBalancedNode(6);
balancedTree.addBalancedNode(9);

console.log("Balanced Tree\n");
console.log(balancedTree);
console.log(balancedTree.root.left);
console.log(balancedTree.root.right);
console.log("\n\n\n");

// Unbalanced Tree to the left

/* 

                     4
                    / \
                   2   null
                  / \
                 7   null
                / \
               1  null
                    

*/

const leftTree = new BinaryTree(4);

leftTree.addNodeToLeft(2);
leftTree.addNodeToLeft(7);
leftTree.addNodeToLeft(1);

console.log("Left Tree\n");
console.log(leftTree);
console.log(leftTree.root.left);
console.log("\n\n\n");

// Unbalanced Tree to the right

/* 
                     4
                    / \
                null   2
                      / \
                   null  7
                        / \
                    null   1
*/

const rightTree = new BinaryTree(4);

rightTree.addNodeToRight(2);
rightTree.addNodeToRight(7);
rightTree.addNodeToRight(1);

console.log("Right Tree\n");
console.log(rightTree);
console.log(rightTree.root.right);
console.log("\n\n\n");

// Just to test our addNodeToLeft method, we could start at the 2 node of our Balanced Tree, and add to the furthest left of that node

// balancedTree.addNodeToLeft(15, balancedTree.root.left); // since Node 2 has a .left of Node 1, and Node 1 has a .left of null, 15 will become the .left of Node 1
// console.log(balancedTree.root.left); // prints Node 2, showing its .left of Node 1 and Node 1's .left of Node 15.
// console.log(balancedTree.root.left.left.left); // prints Node 15

balancedTree.invertTree();

console.log("Inverted Balanced Tree\n");
console.log(balancedTree);
console.log(balancedTree.root.left);
console.log(balancedTree.root.right);
console.log("\n\n\n");

leftTree.invertTree();

console.log("Inverted Left Tree\n");
console.log(leftTree);
console.log(leftTree.root.right);
console.log("\n\n\n");

rightTree.invertTree();

console.log("Inverted Right Tree\n");
console.log(rightTree);
console.log(rightTree.root.left);
console.log("\n\n\n");
