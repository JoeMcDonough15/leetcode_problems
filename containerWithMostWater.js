// 11. Container With Most Water
// * Medium
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// Use two pointers, at opposite ends of the array
// keep track of a maxSoFar that starts at -Infinity
// Use the difference in indices as the current container's width, and the minimum height between the two values at the indices as the current container's height
// calculate the area of that currentContainer by width * height
// If this current area is greater than the maxSoFar, set maxSoFar to the current area
// whichever height value is less, move that index pointer inward
// when the two pointers touch, return the maxSoFar, because we can't make anymore containers

const maxArea = (height) => {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let largestArea = -Infinity; // so any area will beat this, to start
  while (leftIndex < rightIndex) {
    const containerWidth = rightIndex - leftIndex; // indices are naturally sorted, so this value will always be positive
    const containerHeight = Math.min(height[leftIndex], height[rightIndex]);
    const containerArea = containerWidth * containerHeight;
    if (containerArea > largestArea) {
      largestArea = containerArea;
    }
    // adjust one of the indices now
    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  return largestArea;
};
