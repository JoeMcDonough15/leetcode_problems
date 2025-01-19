// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

// possible solution

// keep track of a longestConsecutiveSequence, initialized at 0, in case the array is empty
// convert the array to a set
// iterate over the set keeping track of currentValue
// if the currentValue does not have n - 1 in the set, then that means we are at the beginning of a new sequence
// initialize currentSequenceLength = 1 to represent this new beginning of a sequence
// use a while loop to count the sequence, with an index i initialized at 1
// while n + i continues to be  in the set, increment the length of the sequence by 1
// increment i by 1
// when that loop breaks, check to see if the currentSequenceLength is greater than the longestConsecutiveSequence
// if so, replace it.

// return longestConsecutiveSequence at the end of the loop over the set

// Time Complexity - O(n) because we iterate over the entire array (as a set) once
// Space Complexity - O(n) because we do need to convert the array into a set, which takes additional memory

const longestConsecutiveSequence = (nums) => {
  let longestSequence = 0;
  const setOfNums = new Set(nums);

  for (const num of setOfNums) {
    if (!setOfNums.has(num - 1)) {
      let currentSequence = 1;
      let index = 1;
      while (setOfNums.has(num + index)) {
        currentSequence++;
        index++;
      }
      if (currentSequence > longestSequence) {
        longestSequence = currentSequence;
      }
    }
  }
  return longestSequence;
};

// Tests

// Test 1
// Input: nums = [100,4,200,1,3,2] // 4
// console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));

// // Test 2
// // Input: nums = [0,3,7,2,5,8,4,6,0,1]  // 9
// console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

// // Test 3
// // nums = [0, 3, 7, 2, 5, 8, 4, 0, 6, 1, 12, 14, 15, 16] // 9
// console.log(
//   longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 0, 6, 1, 12, 14, 15, 16])
// );
