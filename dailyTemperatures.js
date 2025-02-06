/*
Daily Temperatures - LeetCode No. 739 - Medium 
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 
Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]
 

Constraints:

1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100



Brute Force Solution - use a nested loop to iterate from each day until we find a day that has a higher temperature, subtract the higher temperature day's index
minus the current day's index and put the difference in a results array.  O(n^2) time complexity because in the worst case, all the temperatures keep
decreasing until the very end of a very long array, which would require n number of iterations n times, so n * n.


Optimal Solution - Fill a results array the length of the given array with 0's.  Also, initialize an empty stack. 
Iterate over every day of the given array, place a sub array (that acts like tuple would in Python) that tracks the temperature 
of that day with its index.  Add each one of these to the stack.  But before adding it to the stack, check to see if the top tuple on the stack
has a lower temperature than the current day.  If so, pop the stack, subtract the difference in indices and place that difference
 at the index in the results array that maps to the popped day's index.  After the loop concludes, return the results array.  This gives us 
 linear time because in the worst case, a temperature at the very end of the given array needs to keep iterating back through the stack of temperatuers
 lower than it, adding the difference to the results array each time.  So that would give us 2(n) time, the n that it takes to iterate through
 the given array, and the n that it takes to work back through the stack's tuples.

 Time Complexity - O(n) iteration over given array, and a maximum of one possible backwards iteration over the stack that equals the size of the given array 
 (if, say each temperature decreases as we go through the given array, and then at the end of the array we find a temperature higher than any of the previous days)
 Space Complexity - O(n) we must store the results as an array of equal length to the given array

*/

const dailyTemperatures = function (temperatures) {
  const results = new Array(temperatures.length).fill(0); // linear time and space (fill is linear time)
  const stack = []; // common pattern to keep track of a stack of tuples [ [23, 0], [22, 1], [20, 2] etc.  ]
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];
    while (stack.length && stack[stack.length - 1][0] < temperature) {
      const [_, previousTempIndex] = stack.pop(); // we won't need the temperature, just the index
      results[previousTempIndex] = i - previousTempIndex;
    }
    stack.push([temperature, i]);
  }
  return results;
};
