// LeetCode Premium Problem - Graph Valid Tree - Medium
// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
// write a function to check whether these edges make up a valid tree.

// Time Complexity
// Space Complexity

const validTree = (n, edges) => {
  // if there are no edges, it is a valid tree
  if (!edges.length) return true;
  // this function should define a wrapper function
  // and then return an and statement of that wrapper function call
  // plus visited set has the size of n.   If both of those things are true, the graph is a valid tree
  const visited = new Set();
  const adjArr = new Array(n); // if we fill this with empty arrays, I think they're all of the same reference!!!!!  This was causing bugs: new Array(n).fill([])

  // populate adjacency array, where nodes will be represented by indices and connections represented by subarrays that live at those indices.
  for (let i = 0; i < edges.length; i++) {
    const [node1, node2] = edges[i];
    if (!adjArr[node1]) {
      adjArr[node1] = [];
    }
    adjArr[node1].push(node2);
    if (!adjArr[node2]) {
      adjArr[node2] = [];
    }
    adjArr[node2].push(node1);
  }
  // dfs function to check for cycles and return false if we find any.  Since null will never be placed in a sub array in adjArr, null can be used as the default value for when there is not a previous node (only for the original function call since all the recursive calls will have a previous node)
  const dfs = (node, prevNode = null) => {
    if (visited.has(node)) {
      return false;
    }
    visited.add(node);
    const connections = adjArr[node]; // since each node is represented as an index of the adjArr and that node's connecting nodes are contained in a sub array at that index.
    for (const connectingNode of connections) {
      if (connectingNode === prevNode) continue;
      // if we have visited this node before or if the recursive call returns false
      if (!dfs(connectingNode, node)) {
        return false;
      }
    }
    return true;
  };

  // return the assertion that we did not find any cycles and that the size of the visited set includes every node (because there can be no free standing nodes in a valid tree)
  return dfs(0) && visited.size === n;
};

/*

TEST 1: true; valid 4 node tree

     0
    /  \
   1    2
  /
 3

 */

console.log(
  validTree(4, [
    [0, 1],
    [0, 2],
    [1, 3],
  ])
);

/*

 TEST 2: false; 4 node graph with a cycle

     0
    /  \
   1    2
    \  /
      3 

*/

console.log(
  validTree(4, [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ])
);

/* TEST 3: false; 5 node graph with an island node

     0
    /  \
   1    2
  /
 3 
      4


*/

console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [1, 3],
  ])
);

/*

TEST 4: true; valid 6 node tree


     0
    /  \
   1    2
  /    /  \
 3    4    5
      


*/

console.log(
  validTree(6, [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [2, 5],
  ])
);
