/**
 * You are given an array prices where prices[i] is the price of a given stock
 * on the ith day.
 *
 * You should maximize profits by choosing a single day to buy one stock
 * and a different day in the future to sell that stock. Return the maximum
 * profit you can achieve. If unable to achieve any profit, return 0.
 *
 * The price array will be at least length 1. And prices will be at least 0.
 *
 * Input: An array of prices
 * Output: An integer of your profit.
 * Constraint: None
 * Edge: You may only have one day of trading activity.
 *
 * Iterate through once. Store your first element. If your next element is
 * smaller than your current, replace. If your next element is larger, store
 * the largest profit. If no transaction can be done, return 0.
 */

const maxProfit = (prices) => {
  let lowestPrice = prices[0];
  let highestPrice = prices[0];
  let maxProfit = highestPrice - lowestPrice;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowestPrice) {
      lowestPrice = prices[i];
      highestPrice = prices[i];
    }
    if (prices[i] > highestPrice) {
      highestPrice = prices[i];
    }
    let profit = highestPrice - lowestPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

let prices;
// Test #1
prices = [7, 1, 5, 3, 6, 4];
const result1 = maxProfit(prices);
console.log(result1); // 5

// Test #2
prices = [7, 6, 4, 3, 1];
const result2 = maxProfit(prices);
console.log(result2); // 0

// Test #3
prices = [2, 4, 1];
const result3 = maxProfit(prices);
console.log(result3); // 2