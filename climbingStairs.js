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

// Recursive Solution with Memoization:
// Treat the problem like the Fibonacci sequence, but in reverse.  We are working our way down to 0 from whatever n is.
// Each time we call the function, we recurse twice, once with n - 1 and once with n - 2, and add the results: func(n - 1) + func(n - 2)
// We can use memoization to optimize the performance of this algorithm since it will have 2^n time complexity

// if n is 0, we have found a path to 0, so return 1.  If n is 1, we know we can deduct 1 from it and reach 0 so we can return 1 in that case, too.
// if n is any other positive number, we must add the return of the function with n - 1 to the return of the function with n - 2

const climbStairs = (n, memo = {}) => {
  if (memo[n]) {
    return memo[n];
  }
  if (n === 0 || n === 1) return 1;
  const solution = climbStairs(n - 2, memo) + climbStairs(n - 1, memo);
  memo[n] = solution;
  return solution;
};

// console.log(climbStairs(2)); // 2
// console.log(climbStairs(3)); // 3
// console.log(climbStairs(4)); // 5
// console.log(climbStairs(5)); // 8;
// console.log(climbStairs(45)); // 1836311903;
