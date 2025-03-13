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

  // populate adjacency array
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
  // dfs function to check for cycles and return false if we find any
  const dfs = (node, prevNode) => {
    if (visited.has(node)) {
      return false;
    }
    visited.add(node);
    const connections = adjArr[node];
    for (const connectingNode of connections) {
      if (connectingNode === prevNode) continue;
      if (!dfs(connectingNode, node)) {
        return false;
      }
    }
    return true;
  };

  // return the assertion that we did not find any cycles and that the size of the visited set includes every node (because there can be no free standing nodes in a valid tree)
  return dfs(0, -1) && visited.size === n;
};
