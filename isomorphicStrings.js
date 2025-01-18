// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// Solution
// initialize an empty map
// iterate over s and t simultaneously, keeping track of sChar and tChar each iteration
// for every iteration, check to see if the character of s[i] is not in the map
// if sChar is not a key in the map, check to see if the tChar IS in the map Object's values; if so, return false because that means tChar was assigned as value to another key
// if tChar is not a value in the map, set map[sChar] to the value of tChar
// if sChar is already in the map as a key, then check to make sure that its value is tChar; if it is not, return false because that means sChar was assigned to a different value already
// if we haven't returned false when we finish the loop, return true

// Time Complexity - O(n) because we have to iterate over every character of s.  Iterating over the Object.values(map) on line 60 should be constant time
// because the number of unique keys and values in that map is bound to the number of ascii characters.
// Space Complexity - O(1) because again, the number of unique keys we can have in map is bound to the number of ascii characters.

const isIsomorphic = function (s, t) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    if (!map[sChar]) {
      if (Object.values(map).includes(tChar)) {
        return false;
      }
      map[sChar] = tChar;
    } else if (map[sChar] !== tChar) {
      return false;
    }
  }

  return true;
};

// * Tests

// * Test 1
console.log(isIsomorphic("egg", "add")); // true

// * Test 2
console.log(isIsomorphic("foo", "bar")); // false

// * Test 3
console.log(isIsomorphic("paper", "title")); // true

// * Test 4
console.log(isIsomorphic("badc", "baba")); // false
