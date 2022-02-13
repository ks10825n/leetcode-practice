/**
 * Given a string 's', reverse the order of characters in each word within
 * a sentence while still preserving whitespace and initial word order.
 */

const reverseWords = (s) => {
  const words = s.split(' ');
  const reverseWord = (word) => {
    const split = word.split('');
    let left = 0;
    let right = split.length - 1;
    while (left < right) {
      let temp = split[right];
      split[right] = split[left];
      split[left] = temp;
      left++;
      right--;
    }
    return split.join('');
  }
  const result = words.map((word) => {
    return reverseWord(word);
  })
  return result.join(' ')
};

let s;

// Test #1
s = 'Let\'s take LeetCode contest'
const result1 = reverseWords(s);
console.log(result1); // 's\'teL ekat edoCteeL tsetnoc'