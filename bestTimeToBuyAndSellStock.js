// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// Sliding Window solution
// 1. initiate the buy day to index 0
// 2. initiate a maximumProfitSoFar to 0
// 3. loop through the array, starting at index 1.  This will represent the sell day, which must always be after the buy day.
// 4. if we ever encounter a sell day price that is less than or equal to (because equal to would result in a 0 profit) the buy day price,
//  set the buy day to the current sell day, and continue the loop so the sell day becomes the day that immediately follows the buy day.
// 5. else, subtract the sell day price - buy day price and compare with maximumProfitSoFar, updating if needed
// 6. after the loop ends, return the maximumPriceSoFar

const maxProfit = (prices) => {
  let buyDay = 0;
  let maximumProfitSoFar = 0;
  for (let sellDay = 1; sellDay < prices.length; sellDay++) {
    if (prices[sellDay] <= prices[buyDay]) {
      buyDay = sellDay;
    } else {
      currentProfit = prices[sellDay] - prices[buyDay];
      if (currentProfit > maximumProfitSoFar) {
        maximumProfitSoFar = currentProfit;
      }
    }
  }
  return maximumProfitSoFar;
};

// Tests

// Test 1
const prices1 = [7, 1, 5, 3, 6, 4]; // 5

// Test 2
const prices2 = [7, 6, 4, 3, 1]; // 0

// Test 3
const prices3 = [4]; // 0

// Test 4
const prices4 = [5, 12, 14, 15, 20, 25, 40]; // 35

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));
console.log(maxProfit(prices4));
