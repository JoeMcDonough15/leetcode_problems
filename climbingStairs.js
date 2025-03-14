// LeetCode No. 70 - Climbing Stairs - Easy

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints
// 1 <= n <= 45;

// Recursive Solution with Memoization:
// Treat the problem like the Fibonacci sequence, but in reverse.  We are working our way down to 0 from whatever n is.
// Each time we call the function, we recurse twice, once with n - 1 and once with n - 2, and add the results: func(n - 1) + func(n - 2)
// We can use memoization to optimize the performance of this algorithm since it will have 2^n time complexity

// if n is 0, we have found a path to 0, so return 1.  If n is 1, we know we can deduct 1 from it and reach 0 so we can return 1 in that case, too.
// if n is any other positive number, we must add the return of the function with n - 1 to the return of the function with n - 2

const climbStairsRecursive = (n, memo = {}) => {
  if (memo[n]) {
    return memo[n];
  }
  if (n === 0 || n === 1) return 1;
  const solution = climbStairs(n - 2, memo) + climbStairs(n - 1, memo);
  memo[n] = solution;
  return solution;
};

// console.log(climbStairsRecursive(2)); // 2
// console.log(climbStairsRecursive(3)); // 3
// console.log(climbStairsRecursive(4)); // 5
// console.log(climbStairsRecursive(5)); // 8;
// console.log(climbStairsRecursive(45)); // 1836311903;

// Iterative Solution with Tabulation:
// build an array whose indices represent each stair from 0 to n
// set the last 3 values of that array to 0, 1, and 2 because:
// if we're at the top stair, there are 0 paths to the top (since we're already there)
// if we're at the penultimate stair, then there's 1 path to the top (a step of 1)
// if we're at the 3rd to last stair, there are 2 paths to the top (two single steps, or one double step)
// from this point on, the number of paths from any stair closer to the bottom ( so towards the 0th index ) can be determined by the sum of the 2 stairs above it, since we can move up 1 or 2 stairs from any given stair

// Time Complexity - O(n)
// Space Complexity - O(n)
const climbStairsIterative = (n) => {
  if (n === 1) return 1; // since we can't make 3 indices with n + 1
  const possibleSteps = new Array(n + 1);
  // set up the last 3 indices
  possibleSteps[n] = 0; // already at the top step; 0 paths from here
  possibleSteps[n - 1] = 1; // 1 path from the 2nd to last step, only a single step
  possibleSteps[n - 2] = 2; // 2 paths from the 3rd to last step, either a single or double step
  // determine the possibilities available at any steps lower than the last 3 steps
  for (let i = n - 3; i >= 0; i--) {
    const singleStep = possibleSteps[i + 1];
    const doubleStep = possibleSteps[i + 2];
    possibleSteps[i] = singleStep + doubleStep;
  }
  return possibleSteps[0]; // 0 represents the bottom of the stairs, so the possibilities from here would be the answer to the problem
};

// console.log(climbStairsIterative(2)); // 2
// console.log(climbStairsIterative(3)); // 3
// console.log(climbStairsIterative(4)); // 5
// console.log(climbStairsIterative(5)); // 8;
// console.log(climbStairsIterative(45)); // 1836311903;
