/* 

Binary Search - LeetCode No. 704 - Easy

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.


Since the algorithm must run in O(log n) time, there is no brute force solution.  Instead, implement the binary search algorithm to solve this.
Initialize a low pointer to 0 and a high pointer to the length of the array.
Run a while loop that ends if the low and high ever cross. (they can be the same index, they just cannot cross)
Each iteration of the loop, determine a mid point by adding the low and high and dividing by 2. (integer division, rounded down)
Index the array at the mid point and check to see if the value is the target.
If it is, return the midpoint, as that is the index of the target.
If the value is lower than the target, move the high point to the mid point - 1
If the value is higher than the target, move the low point to the mid point + 1
Keep repeating the loop and when finally it breaks, return -1, because if the target existed in the array we would have returned it before the loop broke

Time - O(log n)
Space - O(1)
*/

const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    }
  }
  return -1;
};

// Tests

const nums1 = [-1, 0, 3, 5, 9, 12];
const target1 = 9;
const target2 = 2;

console.log(search(nums1, target1)); // 4
console.log(search(nums1, target2)); // -1
