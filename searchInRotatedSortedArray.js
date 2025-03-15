// LeetCode No. 33 - Search in Rotated Sorted Array - Medium
//
//  There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104

const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < nums[0]) {
      // the rotation happens at or before the mid point
      if (target >= nums[0] || target < nums[mid]) {
        // look to the left
        high = mid - 1;
      } else if (target > nums[mid] && target < nums[0]) {
        // look to the right
        low = mid + 1;
      }
    } else if (nums[mid] > nums[nums.length - 1]) {
      // the rotation happens after the mid point
      if (target > nums[mid] || target <= nums[nums.length - 1]) {
        // look to the right
        low = mid + 1;
      } else if (target > nums[nums.length - 1] && target < nums[mid]) {
        // look to the left
        high = mid - 1;
      }
    } else {
      // standard binary search, no rotation detected
      if (target > nums[mid]) {
        // look to the right
        low = mid + 1;
      } else {
        // look to the left
        high = mid - 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([10, 12, 4, 5, 6, 7, 8], 4)); // 2
console.log(search([2, 3, 4, 5, 6, 0, 1], 6)); // 4
console.log(search([1], 0)); // -1
console.log(search([1, 2, 3], 2)); // 1
console.log(search([3, 1], 1)); // 1
console.log(search([5, 1, 3], 5)); // 0
