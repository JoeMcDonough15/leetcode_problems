# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.
 
 
# Constraints:

# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.

# Polya's
# let's use a stack to keep track of opens
# map all opens and closes in a char_map
# iterate through the array, appending any open to the stack
# if encountering a close, make sure the stack is not empty and that the last element in the stack matches the current closing character
# if not, return false
# return true at the end of the loop if the stack is empty

# Time Complexity - O(n)
# Space Complexity - O(n) because if we have all open characters, each would be appended to the stack before returning false at the end of the loop

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        char_map = {')': '(', ']' : '[', '}' : '{'}
        for current_char in s:
            if current_char in char_map.values():
                if stack and stack[-1] == char_map[current_char]:
                    stack.pop()
                else: 
                    return False
            else:
                stack.append(current_char)
        return len(stack) == 0

            


# Tests

# Test 1

Solution.isValid('()') # True

# Test 2:

Solution.isValid('()[]{}') # True

# Test 3:

Solution.isValid('(]') # False

# Test 4:

Solution.isValid('([])') # True
