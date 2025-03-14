// LeetCode No. 34 - Find First and Last Position of Element in Sorted Array - Medium

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

const findCorrectIndex = (nums, target, firstOrLast) => {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const currentValue = nums[mid];
    if (currentValue === target && firstOrLast === "first") {
      // make sure this is the first index
      if (nums[mid - 1] === target) {
        // look to the left
        high = mid - 1;
      } else {
        // return the first index
        return mid;
      }
    } else if (currentValue === target && firstOrLast === "last") {
      // make sure this is the last index
      if (nums[mid + 1] === target) {
        // look to the right
        low = mid + 1;
      } else {
        // return the last index
        return mid;
      }
    } else if (currentValue < target) {
      // look to the right
      low = mid + 1;
    } else if (currentValue > target) {
      // look to the left
      high = mid - 1;
    }
  }
  return -1;
};

const searchRange = (nums, target) => {
  if (nums.length === 0) return [-1, -1];
  const firstIndex = findCorrectIndex(nums, target, "first");
  const lastIndex = findCorrectIndex(nums, target, "last");
  return [firstIndex, lastIndex];
};

// Tests

// Test 1:
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]

// Test 2:
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]

// Test 3:
console.log(searchRange([], 0)); // [-1, -1]

// Test 4:
console.log(searchRange([1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6], 3)); // [2, 10]
