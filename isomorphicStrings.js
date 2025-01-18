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
// iterate over s and t simultaneously, using index i, and initializing an empty map
// for every character of s and t, check to see if the character of s[i] is in the map
// if it is not in the map, set it as a key in the map and its value to t[i]
// if it is in the map, and the value is not already t[i], then return false because that letter would have already been mapped to a different letter
// if it's in the map and its value is t[i] just ignore it, it's ok
// if we haven't returned false when we finish the loop, return true

const isIsomorphic = function (s, t) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];
    const keys = Object.keys(map);
    const values = Object.values(map);
    if (keys.includes(sChar) && !values.includes(tChar)) {
      return false;
    }
    if (values.includes(tChar) && !keys.includes(sChar)) {
      return false;
    }
    if (
      keys.includes(sChar) &&
      values.includes(tChar) &&
      map[sChar] !== tChar
    ) {
      return false;
    }
    map[sChar] = tChar;
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
