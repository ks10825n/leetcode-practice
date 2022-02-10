/**
 * The count-and-say sequence is a sequence of digit strings defined by the
 * recursive formula
 *
 * countAndSay(1) = "1";
 * countAndSay(2) = One "1" -> "11"
 * countAndSay(3) = Two "1" -> "21"
 * countAndSay(4) = One "2" and One "1" -> "1211"
 *
 * Input: An integer of between 1 and 30 inclusive
 * Output: A stringified output of the count and say sequence dependent on n
 * Constraint: None
 * Edge: None
 */

const countAndSay = (n) => {
  let counter = 1;
  let result = '1';

  if (n === 1) {
    return result;
  };

  while (counter < n) {
    // iterate through result
    console.log(result);
    let count = 0;
    let currentNum = result[0];
    let stringNum = '';
    for (let i = 0; i < result.length; i++) {
      if (result[i] === currentNum) {
        count++;
      } else {
        stringNum += count + currentNum;
        count = 1;
        currentNum = result[i];
      }
    }
    stringNum += count + currentNum;
    result = stringNum;
    counter++;
  }
  return result;
};

let n;

// Test #1
n = 1;
const result1 = countAndSay(n);
console.log(result1); // "1"

// Test #2
n = 5;
const result2 = countAndSay(n);
console.log(result2) // "1211"