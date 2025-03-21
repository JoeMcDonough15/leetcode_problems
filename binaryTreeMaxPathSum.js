// LeetCode No. 124 - Binary Tree Maximum Path Sum - Hard

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.
// A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

// Example 1:
//
//       1
//      / \
//     2   3

// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

// Example 2:
//
//        -10
//        /  \
//       9    20
//           /  \
//         15    7

// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

// Constraints:

// The number of nodes in the tree is in the range [1, 3 * 104].
// -1000 <= Node.val <= 1000

// Figure out the maximum of whether you split or not.  Splitting is traversing both directions from a node (left and right).
// If we split, the node from which we split must be the top node of the path.  Keep a global variable of the result and anytime
// we do split, and that result is better than what we have stored, update the result.  If we don't split, return that value back
// to the parent node from where we called the function.

// DFS

// For when we do not splilt, Use a depth first search to determine every sub tree's maximum path to determine
// if the left sub tree or right sub tree gives us a greater sum

class TreeNode {
  constructor(val) {
    if (val === undefined) {
      this.val = 0; // any nodes initialized without a value default to 0.
    } else {
      this.val = val;
    }
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(rootVal) {
    this.root = new TreeNode(rootVal); // if we do not provide a rootVal when instantiating our tree, TreeNode will default it to 0
  }

  addToBalancedTree(val, startNode = this.root) {
    const queue = [startNode];
    while (queue.length) {
      const currentNode = queue.shift();
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
        return;
      }
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
        return;
      }
      queue.push(currentNode.left, currentNode.right);
    }
  }

  addToLeft(val, startNode = this.root) {
    if (startNode.left) {
      this.addToLeft(val, startNode.left);
    } else {
      startNode.left = new TreeNode(val);
    }
  }

  addToRight(val, startNode = this.root) {
    if (startNode.right) {
      this.addToRight(val, startNode.right);
    } else {
      startNode.right = new TreeNode(val);
    }
  }

  // Time Complexity - O(n) because we only ever visit each node once
  // Space Complexity - O(height of the tree), which, if balanced, would be O(log(n)), but worst case could be O(n)
  // where n is the number of nodes in an unbalanced tree because each node would represent its own level of the tree.

  maxPathSum = (root) => {
    let maxSum = root.val;

    const dfs = (node) => {
      if (!node) {
        return 0;
      }

      let leftMax = dfs(node.left);
      let rightMax = dfs(node.right);
      leftMax = Math.max(leftMax, 0); // to correct if leftMax is negative
      rightMax = Math.max(rightMax, 0); // to correct if rightMax is negative

      // update maxSum if the sum achieved by splitting from this node is bigger than it
      maxSum = Math.max(node.val + leftMax + rightMax, maxSum);

      // return back the max sum if we were to not split from this node - is it to the left or to the right?
      return Math.max(node.val + leftMax, node.val + rightMax);
    };

    dfs(root);
    return maxSum;
  };
}

const treeOne = new BinaryTree(1); // root node
treeOne.addToBalancedTree(2);
treeOne.addToBalancedTree(3);

const treeTwo = new BinaryTree(-10); // root node
treeTwo.addToBalancedTree(9);
treeTwo.addToBalancedTree(20);
treeTwo.addToLeft(15, treeTwo.root.right); // start from the 20 node
treeTwo.addToRight(7, treeTwo.root.right); // start from the 20 node

const treeThree = new BinaryTree(-3); // root node

console.log(treeOne.maxPathSum(treeOne.root)); // 6
console.log(treeTwo.maxPathSum(treeTwo.root)); // 42
console.log(treeThree.maxPathSum(treeThree.root)); // -3
