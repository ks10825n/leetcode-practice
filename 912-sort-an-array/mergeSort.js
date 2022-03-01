/**
 * Use the merge sort algorithim to sort an array
 */

const mergeSort = (arr) => {
  const merge = (left, right) => {
    const sorted = [];
    let leftIdx = 0, rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] <= right[rightIdx]) {
        sorted.push(left[leftIdx]);
        leftIdx++;
      } else {
        sorted.push(right[rightIdx]);
        rightIdx++;
      }
    }

    const remaining = leftIdx === left.length ? right.slice(rightIdx) : left.slice(leftIdx);
    return sorted.concat(remaining);
  }

  const sort = (arr) => {
    if (arr.length < 2) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = sort(left);
    const sortedRight = sort(right);
    const sorted = merge(sortedLeft, sortedRight);

    return sorted;
  }
  return sort(arr);
}

let arr;

// Test #1
arr = [10, 9, 8, 7, 6, 5];
const result1 = mergeSort(arr);
console.log(result1);
