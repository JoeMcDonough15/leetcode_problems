// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// Solution using a hashMap
// Complexity
// Time O(n) because worst case, you have to iterate over every unique number in the array
// Space O(n) because worst case, you have to store every unique number in the set

// 1. initialize an empty map
// 2. iterate over every num in the array
// 3. for each num, if that num is in the hashMap, return true
// 4. place every unique num in the map
// 5. at the end of the loop, return false if we have not already returned true

const containsDuplicate = (nums) => {
  const numSet = new Set();
  for (const num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
};
