// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

const levelOrder = (root) => {
  const queue = [];
  const result = [];
  queue.push(root);
  while (queue.length) {
    const currentLevelSize = queue.length; // even though the queue may grow in size with enqueues (and will certainly shrink with dequeues), the currentLevelSize will not change.
    const currentLevelValues = []; // will represent all values at the current level of the tree
    for (let i = 0; i < currentLevelSize; i++) {
      currentNode = queue.shift(); // each iteration of for loop, dequeue from the front of the queue the current node at this level
      if (currentNode) {
        currentLevelValues.push(currentNode.value);
        queue.push(currentNode.left); // enqueue left childNode to the back of the queue
        queue.push(currentNode.right); // enqueue right childNode to the back of the queue
      }
    }
    if (currentLevelValues.length) {
      result.push(currentLevelValues);
    }
  }
  return result;
};
