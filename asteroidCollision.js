/* 
Asteroid Collision - LeetCode No. 735 - Medium

We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

 

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 

Constraints:

2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0

Brute Force Solution 

The chance of a collision is always a positive followed by a negative.  So if you iterate through the array, and inspect the character that follows
to see if it is negative.  If it is, you then have to iterate backwards colliding that negative with each positive that it finds and adding the correct number
(the surviving asteroid) to a results array.  If you have several positives followed by a single negative, then several positives followed by a single negative
and that pattern repeats for thousands of characters, you could end up with O(n^2) time.  This is because for each negative you encounter, you have to iterate back through all the positives
that precede it, tracking each collision.  If the negative has a higher absolute value than all of those positives, you'll need to keep iterating all the way back
to the first positive that preceded it.  Then that would repeat for the next negative with a higher absolute value found after a row of many positives with lower absolute values.

Optimal Solution

Iterate through the given array and use a stack to keep track of any asteroids encountered. If we ever encounter a negative number,
run a while loop whose conditional checks to see if the stack has anything in it and that the last item in the stack is positive.  
If both are true, we must compare the current negative's absolute value with the last positive's absolute value.
If the top of the stack's positive absolute value is greater, set the current asteroid to 0 since it will be obliterated.  If the current asteroid's
absolute value is bigger, pop the stack, to obliterate the positive that it destroyed.  If the two are equal in absolute value, both pop the stack and
set the current asteroid to 0 since both are destroyed.  After this while loop ends, check to see if we have a current asteroid (since 0 is a falsy value).  If we do, 
add it to the return array.  This should account for any positives, and any negatives that survived collision, and any asteroids
that did not collide with anything.  At the end, return the stack.

Time - O(n) we only need one pass through the initial array, and one possible pass backwards through the stack, of length n, if we encounter a negative
after thousands of positives and the negative's absolute value is greater than all of them.
Space - O(n) because the stack could grow to be the size of the given array,
if all asteroids are positive, all asteroids are negative, or thousands of the asteroids are negatives followed by a thousands of all positives 
since there would be no collisions in those cases.
*/

const asteroidCollision = (asteroids) => {
  const stack = [];
  for (let asteroid of asteroids) {
    while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
      const difference = asteroid + stack[stack.length - 1];
      if (difference < 0) {
        stack.pop();
      } else if (difference > 0) {
        asteroid = 0;
      } else {
        stack.pop();
        asteroid = 0;
      }
    }
    if (asteroid) {
      stack.push(asteroid);
    }
  }
  return stack;
};
