// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Constraints:

// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.

// Use Two Pointers at opposite ends of the array
// check the sum of the values at both pointers, if equal to the target, return those indices (adding one to them)
// if the sum is less than the target, move the left pointer in
// if the sum is greater than the target, move the right pointer in
// when the pointers touch, break the loop, but we should not reach that point since every test case has one exact solution involving two separate numbers

const twoSum = (numbers, target) => {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;
  while (leftIndex < rightIndex) {
    const currentSum = numbers[leftIndex] + numbers[rightIndex];
    if (currentSum === target) {
      return [leftIndex + 1, rightIndex + 1];
    }
    if (currentSum < target) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  // we should not reach here, but if for some reason there is no solution, return an empty array
  return [];
};
