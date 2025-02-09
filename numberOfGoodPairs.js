// Number of Good Pairs - LeetCode No. 1512 - Easy

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/* 

Brute Force Solution 

Initialize a count to 0.
Iterate over the given array and use a nested loop to move forward from that index to the end of the array, incrementing a count each time an
index has the same number.  Return the count at the end of the outer loop.  

Time - O(n^2)
Space - O(1)

Optimal Solution 

Initialize a matchCount to 0.
Keep a map of every new value seen as we iterate over the array, and its count (the number of times it has appeared so far).  Whenever we see a repeat number,
add that value's count to the matchCount.  Then increment the count in the map that corresponds to that value.  Since we keep track of the matchCount
as we iterate, we only need to count every possible match with the current number we're on.  So if we've seen 1 3 times before, we should add 3 matches
to matchCount.  The previous 2 matches would have already been accounted for, bringing the matchCount to 5. 

Time - O(n)
Space - O(n) to account for the map which could grow to size n


*/

const numIdenticalPairs = (nums) => {
  let matchCount = 0;
  let numMap = {};
  for (const num of nums) {
    if (numMap[num]) {
      matchCount += numMap[num];
      numMap[num]++;
    } else {
      numMap[num] = 1;
    }
  }
  return matchCount;
};

const test1 = [1, 2, 3, 1, 1, 3];
const test2 = [1, 1, 1, 1];
const test3 = [1, 2, 3];

console.log(numIdenticalPairs(test1)); // 4
console.log(numIdenticalPairs(test2)); // 6
console.log(numIdenticalPairs(test3)); // 0
