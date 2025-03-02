// LeetCode 100. Same Tree - Easy
//
//  Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
//       1            1
//      / \          / \
//     2   3        2   3
// Output: true

// Example 2:
//
//      1               1
//     /                 \
//    2                   2
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:

// Input: (p = [1, 2, 1]), (q = [1, 1, 2]);

//    1       1
//   / \     / \
//  2   1   1   2
//
// Output: false;

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

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
    this.root = null; // isSameTree constraints allow for 0 nodes, so we have to have a way to express a tree with no nodes.  So this.root starts at null.  IF we don't add any nodes, we have an empty tree.
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
}

// Solution: use a queue (BFS) to compare the left and right sides of both trees.  From both trees, add the node's .left and .right
// nodes to a sub array inside the queue, and then when dequeuing, compare those .left and .right nodes.  Then do the same thing
// with any .left/.right nodes those nodes include.  Return false at any point when either a node exists on one tree but not the other, or when
// the nodes are not the same value. Continue until the queue is empty and return true if you didn't return false

// Complexity
// Time - O(n) each node will be visited once
// Space - O(n) for perfectly balanced trees, the queue will grow twice as big as the widest (lowest) level of the trees because we are adding two subarrays for every pair of nodes compared.

const isSameTree = (p, q) => {
  if (!p && !q) return true; // if both trees are empty, return true;
  if ((p && !q) || (q && !p)) return false; // if p exists and q does not, or vice versa, we have one empty tree and one non-empty tree.
  if (p && q && p.val !== q.val) return false; // p and q represent the roots of the tree.  If we have an empty tree, p and q will be null.
  const queue = [
    [p.left, q.left],
    [p.right, q.right],
  ];
  while (queue.length) {
    const [treeOneNode, treeTwoNode] = queue.shift();
    if (!treeOneNode && !treeTwoNode) continue;
    if (
      (treeOneNode && !treeTwoNode) ||
      (treeTwoNode && !treeOneNode) ||
      treeOneNode.val !== treeTwoNode.val
    ) {
      return false;
    }
    queue.push(
      [treeOneNode.left, treeTwoNode.left],
      [treeOneNode.right, treeTwoNode.right]
    );
  }

  return true;
};

// empty pair of trees
const emptyTreeOne = new BinaryTree();
const emptyTreeTwo = new BinaryTree();

// balanced pair of trees
const balancedTreeOne = new BinaryTree();
const balancedTreeTwo = new BinaryTree();
balancedTreeOne.addBalancedNode(1); // root node
balancedTreeOne.addBalancedNode(2);
balancedTreeOne.addBalancedNode(3);
balancedTreeTwo.addBalancedNode(1); // root node
balancedTreeTwo.addBalancedNode(2);
balancedTreeTwo.addBalancedNode(3);

// unbalanced pair of trees
const unbalancedTreeOne = new BinaryTree();
const unbalancedTreeTwo = new BinaryTree();
unbalancedTreeOne.addNodeToLeft(1); // root node
unbalancedTreeOne.addNodeToLeft(2);
unbalancedTreeTwo.addNodeToRight(1); // root node
unbalancedTreeTwo.addNodeToRight(2);

// another balanced pair of trees
const balancedTreeThree = new BinaryTree();
const balancedTreeFour = new BinaryTree();
balancedTreeThree.addBalancedNode(1); // root node
balancedTreeThree.addBalancedNode(2);
balancedTreeThree.addBalancedNode(1);
balancedTreeFour.addBalancedNode(1); // root node
balancedTreeFour.addBalancedNode(1);
balancedTreeFour.addBalancedNode(2);

// test cases
console.log(isSameTree(emptyTreeOne.root, emptyTreeTwo.root)); // true
console.log(isSameTree(balancedTreeOne.root, balancedTreeTwo.root)); // true;
console.log(isSameTree(unbalancedTreeOne.root, unbalancedTreeTwo.root)); // false;
console.log(isSameTree(balancedTreeThree.root, balancedTreeFour.root)); // false;
console.log(isSameTree(emptyTreeOne.root, balancedTreeOne.root)); // false;
