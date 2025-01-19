// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// Possible Solution
// initialize a buckets array that is the length of the original array plus 1, filled with undefined values
// initialize an empty map that will record all the numbers (key), and the frequency that each number appears (value) in the original array
// iterate over the original array, checking to see if each number is in the map.  If it is, add 1 to its value, if not, set it to 1
// iterate over the map's keys, placing an empty array at any bucket's index that maps to a key's value if it's still a falsy value (undefined)
// place that num that is the map's current key inside the proper bucket's array using the index that is its value
// initialize a results array to be returned
// iterate backwards over buckets since we'll find the most frequent values at the higher indices
// iterate over every array inside buckets as we move backwards through buckets.  Place each num of those sub arrays (buckets) inside result
// once we have pushed k values to the result array, return that result array

const topKFrequent = (nums, k) => {
  const buckets = new Array(nums.length + 1);
  const map = {};
  for (const num of nums) {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }
  const keyNums = Object.keys(map);
  for (const key of keyNums) {
    const currentBucket = map[key];
    if (!buckets[currentBucket]) {
      buckets[currentBucket] = [];
    }
    buckets[currentBucket].push(Number(key));
  }

  const result = [];
  for (let i = buckets.length - 1; i > 0; i--) {
    const currentBucket = buckets[i];
    if (currentBucket) {
      for (const num of currentBucket) {
        result.push(num);
        if (result.length === k) {
          return result;
        }
      }
    }
  }
};

// * Tests

// * Test 1
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]

// * Test 2
console.log(topKFrequent([1, 1, 1, 2, 2, 2, 3], 1)); // [0] or [1]
// Output: [1] or [2]

// * Test 3
console.log(topKFrequent([1], 1)); // [1]
