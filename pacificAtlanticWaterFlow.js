// LeetCode No. 417 - Pacific Atlantic Water Flow - Medium

// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.
// The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[row][col]
// represents the height above sea level of the cell at coordinate (row, col).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west
// if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent
// to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [rowIndex, colIndex] denotes that rain water can flow from cell (rowIndex, colIndex)
//  to both the Pacific and Atlantic oceans.

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
// [0,4]: [0,4] -> Pacific Ocean
//        [0,4] -> Atlantic Ocean
// [1,3]: [1,3] -> [0,3] -> Pacific Ocean
//        [1,3] -> [1,4] -> Atlantic Ocean
// [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean
//        [1,4] -> Atlantic Ocean
// [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean
//        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
// [3,0]: [3,0] -> Pacific Ocean
//        [3,0] -> [4,0] -> Atlantic Ocean
// [3,1]: [3,1] -> [3,0] -> Pacific Ocean
//        [3,1] -> [4,1] -> Atlantic Ocean
// [4,0]: [4,0] -> Pacific Ocean
//        [4,0] -> Atlantic Ocean
// Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
// Example 2:

// Input: heights = [[1]]
// Output: [[0,0]]
// Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

// Approach -
// Keep two sets, one for the nodes that can reach the Pacific, and one for nodes that can reach the Atlantic.
// Iterate only over the top row, bottom row, left column, and right column of the graph (2D matrix).  Move in from each square
// using a dfs and only add the current coordinates to the respective ocean if they are on the edge or if
// their node value is >= the previous node's value.
// The top and left edges of the graph are mapped to the Pacific set while the bottom and right edges of the graph are mapped to the Atlantic set.

const pacificAtlantic = (heights) => {
  const ROWS = heights.length;
  const COLS = heights[0].length;
  const nodesToPacific = new Set();
  const nodesToAtlantic = new Set();

  for (let j = 0; j < COLS; j++) {
    // dfs over the top row
    dfs(0, j, nodesToPacific, heights[0][j], ROWS, COLS, heights);
    // dfs over the bottom row
    dfs(
      ROWS - 1,
      j,
      nodesToAtlantic,
      heights[ROWS - 1][j],
      ROWS,
      COLS,
      heights
    );
  }

  for (let i = 0; i < ROWS; i++) {
    // dfs over the left column
    dfs(i, 0, nodesToPacific, heights[i][0], ROWS, COLS, heights);

    // dfs over the right column
    dfs(
      i,
      COLS - 1,
      nodesToAtlantic,
      heights[i][COLS - 1],
      ROWS,
      COLS,
      heights
    );
  }

  const result = [];
  for (let x = 0; x < ROWS; x++) {
    for (let y = 0; y < COLS; y++) {
      const currentCoord = `${x},${y}`;
      if (
        nodesToAtlantic.has(currentCoord) &&
        nodesToPacific.has(currentCoord)
      ) {
        result.push([x, y]);
      }
    }
  }

  return result;
};

const dfs = (row, col, visited, prevHeight, ROWS, COLS, heights) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= ROWS ||
    col >= COLS ||
    visited.has(`${row},${col}`) ||
    heights[row][col] < prevHeight
  ) {
    return;
  }
  visited.add(`${row},${col}`);
  dfs(row - 1, col, visited, heights[row][col], ROWS, COLS, heights);
  dfs(row + 1, col, visited, heights[row][col], ROWS, COLS, heights);
  dfs(row, col - 1, visited, heights[row][col], ROWS, COLS, heights);
  dfs(row, col + 1, visited, heights[row][col], ROWS, COLS, heights);
};

const heightsOne = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
console.log(pacificAtlantic(heightsOne)); // [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

const heightsTwo = [[1]];

console.log(pacificAtlantic(heightsTwo)); // [[0,0]]
