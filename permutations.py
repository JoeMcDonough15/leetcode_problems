'''
Permutations - Level Medium

Given an array nums of distinct integers, return all the possible 
permutations
. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.


Polya's
1. determine a base case where if the nums array has 1 num in it, return that 1 num in a nested array, so nums = [1] ===> [ [1] ]
2. initialize an empty array to act as the result
3. iterate over every num in nums
    4. each iteration, pop off the 0th index of nums, store that value in a variable called n <--- our recursive step
    5. pass the remaining nums into the function recursively, working towards the base case, storing the return value as perms
    6. whether it's the base case, or another recursive return, iterate over every array we got back in perms and append n to the end of each of those arrays
    7. use .extend() to place all the perms into result
    8. the value that was popped from the array each iteration must be appended to the end of the array
'''


def permutations(nums):
    if len(nums) == 1:
        return [nums[:]]

    result = []
    for _ in nums:
        num = nums.pop(0)
        perms = permutations(nums)

        for perm in perms:
            perm.append(num)

        result.extend(perms)
        nums.append(num)
    
    return result

# Tests

# Test 1 

# print(permutations([1, 2, 3])) #  [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

# # Test 2 

# print(permutations([1, 2])) # [[1, 2], [2, 1]]

# # Test 3

# print(permutations([1])) # [[1]]

# # Test 4

# print(permutations([1, 2, 3, 4])) # [[4, 3, 2, 1], [3, 4, 2, 1], [2, 4, 3, 1], [4, 2, 3, 1], [3, 2, 4, 1], [2, 3, 4, 1], [1, 4, 3, 2], [4, 1, 3, 2], [3, 1, 4, 2], [1, 3, 4, 2], [4, 3, 1, 2], [3, 4, 1, 2], [2, 1, 4, 3], [1, 2, 4, 3], [4, 2, 1, 3], [2, 4, 1, 3], [1, 4, 2, 3], [4, 1, 2, 3], [3, 2, 1, 4], [2, 3, 1, 4], [1, 3, 2, 4], [3, 1, 2, 4], [2, 1, 3, 4], [1, 2, 3, 4]]

# Test 5

# print(permutations([1, 2, 3, 4, 5])) # [[5, 4, 3, 2, 1], [4, 5, 3, 2, 1], [3, 5, 4, 2, 1], [5, 3, 4, 2, 1], [4, 3, 5, 2, 1], [3, 4, 5, 2, 1], [2, 5, 4, 3, 1], [5, 2, 4, 3, 1], [4, 2, 5, 3, 1], [2, 4, 5, 3, 1], [5, 4, 2, 3, 1], [4, 5, 2, 3, 1], [3, 2, 5, 4, 1], [2, 3, 5, 4, 1], [5, 3, 2, 4, 1], [3, 5, 2, 4, 1], [2, 5, 3, 4, 1], [5, 2, 3, 4, 1], [4, 3, 2, 5, 1], [3, 4, 2, 5, 1], [2, 4, 3, 5, 1], [4, 2, 3, 5, 1], [3, 2, 4, 5, 1], [2, 3, 4, 5, 1], [1, 5, 4, 3, 2], [5, 1, 4, 3, 2], [4, 1, 5, 3, 2], [1, 4, 5, 3, 2], [5, 4, 1, 3, 2], [4, 5, 1, 3, 2], [3, 1, 5, 4, 2], [1, 3, 5, 4, 2], [5, 3, 1, 4, 2], [3, 5, 1, 4, 2], [1, 5, 3, 4, 2], [5, 1, 3, 4, 2], [4, 3, 1, 5, 2], [3, 4, 1, 5, 2], [1, 4, 3, 5, 2], [4, 1, 3, 5, 2], [3, 1, 4, 5, 2], [1, 3, 4, 5, 2], [5, 4, 3, 1, 2], [4, 5, 3, 1, 2], [3, 5, 4, 1, 2], [5, 3, 4, 1, 2], [4, 3, 5, 1, 2], [3, 4, 5, 1, 2], [2, 1, 5, 4, 3], [1, 2, 5, 4, 3], [5, 2, 1, 4, 3], [2, 5, 1, 4, 3], [1, 5, 2, 4, 3], [5, 1, 2, 4, 3], [4, 2, 1, 5, 3], [2, 4, 1, 5, 3], [1, 4, 2, 5, 3], [4, 1, 2, 5, 3], [2, 1, 4, 5, 3], [1, 2, 4, 5, 3], [5, 4, 2, 1, 3], [4, 5, 2, 1, 3], [2, 5, 4, 1, 3], [5, 2, 4, 1, 3], [4, 2, 5, 1, 3], [2, 4, 5, 1, 3], [1, 5, 4, 2, 3], [5, 1, 4, 2, 3], [4, 1, 5, 2, 3], [1, 4, 5, 2, 3], [5, 4, 1, 2, 3], [4, 5, 1, 2, 3], [3, 2, 1, 5, 4], [2, 3, 1, 5, 4], [1, 3, 2, 5, 4], [3, 1, 2, 5, 4], [2, 1, 3, 5, 4], [1, 2, 3, 5, 4], [5, 3, 2, 1, 4], [3, 5, 2, 1, 4], [2, 5, 3, 1, 4], [5, 2, 3, 1, 4], [3, 2, 5, 1, 4], [2, 3, 5, 1, 4], [1, 5, 3, 2, 4], [5, 1, 3, 2, 4], [3, 1, 5, 2, 4], [1, 3, 5, 2, 4], [5, 3, 1, 2, 4], [3, 5, 1, 2, 4], [2, 1, 5, 3, 4], [1, 2, 5, 3, 4], [5, 2, 1, 3, 4], [2, 5, 1, 3, 4], [1, 5, 2, 3, 4], [5, 1, 2, 3, 4], [4, 3, 2, 1, 5], [3, 4, 2, 1, 5], [2, 4, 3, 1, 5], [4, 2, 3, 1, 5], [3, 2, 4, 1, 5], [2, 3, 4, 1, 5], [1, 4, 3, 2, 5], [4, 1, 3, 2, 5], [3, 1, 4, 2, 5], [1, 3, 4, 2, 5], [4, 3, 1, 2, 5], [3, 4, 1, 2, 5], [2, 1, 4, 3, 5], [1, 2, 4, 3, 5], [4, 2, 1, 3, 5], [2, 4, 1, 3, 5], [1, 4, 2, 3, 5], [4, 1, 2, 3, 5], [3, 2, 1, 4, 5], [2, 3, 1, 4, 5], [1, 3, 2, 4, 5], [3, 1, 2, 4, 5], [2, 1, 3, 4, 5], [1, 2, 3, 4, 5]]


perms = permutations([1, 2, 3, 4, 5])
perms_as_lst_of_tuples = [tuple(perm) for perm in perms] # using tuples because a list of lists cannot be converted into a set, but a list of tuples can

# verify no duplicates with high input
print(len(perms)) # 120
print(len(set(perms_as_lst_of_tuples))) # 120
