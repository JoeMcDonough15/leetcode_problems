// LeetCode 230 - Kth Smallest Element in a Binary Search Tree - Medium
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:

// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class BinarySearchTree {
  constructor(rootVal) {
    this.root = new TreeNode(rootVal);
  }

  addNode = (val, currentNode = this.root) => {
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
        return;
      }
      this.addNode(val, currentNode.left);
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
        return;
      }
      this.addNode(val, currentNode.right);
    }
  };

  // Complexity
  // Time - O(n) for the recursive depth of visiting each node once
  // Space - O(n) for the size of sortedVals (that would outweigh space needed for recursive depth)

  kthSmallest = (node, k) => {
    // helper function to perform in order traversal and populate sortedValsArray
    const populateSortedVals = (node) => {
      if (!node || sortedValsArray.length === k) {
        return;
      }
      populateSortedVals(node.left);
      sortedValsArray.push(node.val); // push the value to the sortedValsArray
      populateSortedVals(node.right);
    };

    const sortedValsArray = [];
    populateSortedVals(node);

    return sortedValsArray[k - 1];
  };
}

//         5
//       /   \
//      3     10
//           /  \
//          9    15
//                 \
//                  20

const myBinarySearchTree = new BinarySearchTree(5);
myBinarySearchTree.addNode(10);
myBinarySearchTree.addNode(15);
myBinarySearchTree.addNode(9);
myBinarySearchTree.addNode(20);
myBinarySearchTree.addNode(3);

console.log(myBinarySearchTree.kthSmallest(myBinarySearchTree.root, 5)); // 15
console.log(myBinarySearchTree.kthSmallest(myBinarySearchTree.root, 1)); // 3
console.log(myBinarySearchTree.kthSmallest(myBinarySearchTree.root, 2)); // 5
console.log(myBinarySearchTree.kthSmallest(myBinarySearchTree.root, 4)); // 10
