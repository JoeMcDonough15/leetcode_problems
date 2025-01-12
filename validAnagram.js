// Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// Solution using hashMap

// Complexity:
// O(n) time - we have to iterate over the entire strings
// O(1) space - whether the input consists only of lowercase letters or the entire Unicode base, the number of unique keys we could have is constant

// 1. Edge case check: if the two strings are different lengths, return false
// 2. keep two separate hashMaps that record the characters as keys and their count as values for both strings
// 3. iterate over both strings at once
// 4. add each character of each string to its respective hashMap
// 5. grab the keys of one of the maps, and iterate over all the keys
// 6. check to see if the value at each key is the same between the two hashMaps
// 7. if it is ever not the same, return false early

const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const hashMapS = {};
  const hashMapT = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    if (hashMapS[charS]) {
      hashMapS[charS] += 1;
    } else {
      hashMapS[charS] = 1;
    }
    if (hashMapT[charT]) {
      hashMapT[charT] += 1;
    } else {
      hashMapT[charT] = 1;
    }
  }

  const mapSKeys = Object.keys(hashMapS);
  for (const key of mapSKeys) {
    if (hashMapS[key] !== hashMapT[key]) {
      return false;
    }
  }
  return true;
};
