// 1. Two Sum   Difficulty Level - Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Solution using a hash map
// Complexity:
// time complexity is O(n) because we only need to iterate through the array once in the worst case (meaning we don't return early)
// space complexity is O(n) because we have to store every value in the array in hashMap in the worst case (meaning we don't return early)

const twoSum = (nums, target) => {
  const hashMap = {};
  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    const currentNum = nums[currentIndex];
    const difference = target - currentNum;
    if (hashMap[difference] !== undefined) {
      return [hashMap[difference], currentIndex];
    }
    hashMap[currentNum] = currentIndex;
  }
};

// Tests

// Test 1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Test 2
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Test 3
// Input: nums = [3,3], target = 6
// Output: [0,1]

// * Clarifying question: if any num appears more than once in the array, and that num adds up to the target, which index would we want to return for that num?  The previous (lower) index?  Or the most recent (higher) index?
// * Example Test:

// Test 4
// Input: nums = [3,3,2,4], target = 7
// Output: [0,3] OR [1,3]
//! According to our constraints, this should not happen because there is only one valid answer.
// However, if we did want to solve for this situation, we could.
//! if we want the lower index, we would not replace any keys that already exist in the hashMap on line 42
//! we would need an extra if check to solve for this like so:
// if (hashMap[currentNum] !== undefined) {
//    continue
// } else {
//    hashMap[currentNum] = currentIndex
// }
//! if we want the higher index, we would replace any keys that are already in hashMap with the currentIndex like we already are doing on line 42
