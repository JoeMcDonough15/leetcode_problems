// LeetCode Node. 200 - Number of Islands - Medium
//
// Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

// Approach -
// Keep track of a number of islands, initialized to 0.
// Iterate over the entire grid with a nested loop, keeping track of a visited set of nodes.
// If the current node has not been visited, and it is a 1, use a BFS or DFS (a queue or a stack) algorithm to find all the connected 1's
// adding each to visited.  Once we have all of the 1's that belong to that island, and have marked them visited, increment the count of islands to
// reflect the island we just explored.
// at the end of the nested loops, return the number of islands.

// Time complexity - O(m * n) because we have to iterate over every column (m) of every row (n)
// Space complexity - O(m * n) because in the worst case, every node is a 1 and we build a stack or queue consisting of every column (m) of every row (n)

const numIslands = (grid) => {
  let numberOfIslands = 0;
  const visitedNodes = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const coordinates = [i, j];
      const stringCoords = `${i},${j}`;
      const currentNode = grid[i][j];
      if (!visitedNodes.has(stringCoords) && currentNode === "1") {
        bfs(coordinates, grid, visitedNodes);
        numberOfIslands++;
      }
    }
  }
  return numberOfIslands;
};

const bfs = (coordinates, grid, visitedNodes) => {
  const queue = [coordinates];
  while (queue.length) {
    const currentCoordinates = queue.shift();
    if (visitedNodes.has(currentCoordinates.toString())) continue;
    visitedNodes.add(currentCoordinates.toString());
    const adjacentIslandNodes = findAdjacencies(currentCoordinates, grid);
    adjacentIslandNodes.forEach((islandNodeCoordinates) => {
      if (!visitedNodes.has(islandNodeCoordinates.toString())) {
        queue.push(islandNodeCoordinates);
      }
    });
  }
};

const findAdjacencies = (coordinates, grid) => {
  const neighbors = [];
  const [i, j] = coordinates;
  const adjacencies = [
    [i + 1, j],
    [i - 1, j],
    [i, j + 1],
    [i, j - 1],
  ];
  adjacencies.forEach((adjacency) => {
    const [row, col] = adjacency;
    if (
      row >= 0 &&
      row < grid.length &&
      col >= 0 &&
      col < grid[0].length &&
      grid[row][col] === "1"
    ) {
      neighbors.push([row, col]);
    }
  });

  return neighbors;
};

// Tests

// Test 1

const gridOne = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

// console.log(numIslands(gridOne)); // 1

// Test 2

const gridTwo = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

// console.log(numIslands(gridTwo)); // 3

const gridThree = [
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
];

// console.log(numIslands(gridThree)); // 1

const gridFour = [
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

// console.log(numIslands(gridFour)); // 0

const gridFive = [
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "1", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "1", "0", "0", "0"],
];

// console.log(numIslands(gridFive)); // 2

const gridSix = [
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "0",
    "1",
    "1",
  ],
  [
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
  ],
  [
    "1",
    "0",
    "1",
    "1",
    "1",
    "0",
    "0",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "0",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
  ],
  [
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "0",
    "0",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
];

// console.log(numIslands(gridSix)); // 1
